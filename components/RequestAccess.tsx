"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Mail, MessageSquare, Phone, Send, User } from "lucide-react";
import { siteName } from "@/data/site";
import { submitRequest } from "@/lib/submit-request";

type Toast = { text: string; isError: boolean; visible: boolean };

// Opens the request form. Pass a topic to pre-fill the message box.
const RequestContext = createContext<(topic?: string) => void>(() => {});

export function RequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast>({
    text: "",
    isError: false,
    visible: false,
  });
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback((nextTopic?: string) => {
    setTopic(nextTopic ?? "");
    setOpen(true);
  }, []);

  // Stop the page behind the form from scrolling, and close on Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => () => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
  }, []);

  function showToast(text: string, isError = false) {
    setToast({ text, isError, visible: true });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, visible: false })),
      5000,
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);
    const value = (name: string) => String(fields.get(name) ?? "").trim();

    setSending(true);
    const result = await submitRequest({
      full_name: value("fullName"),
      email: value("email"),
      company: value("company"),
      contact_number: value("contactNumber"),
      message: value("message"),
    });
    setSending(false);

    if (result.ok) {
      showToast("Success! Your request has been sent.");
      form.reset();
      setOpen(false);
    } else {
      showToast(result.message, true);
    }
  }

  return (
    <RequestContext.Provider value={openModal}>
      {children}

      {open && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="requestTitle"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>

            <div className="modal-header">
              <Mail className="header-icon" aria-hidden />
              <h2 id="requestTitle">Request Access</h2>
            </div>
            <p className="modal-subtitle">
              Fill out this form to request {siteName} services or premium
              tools.
            </p>

            <form className="cyber-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">
                  <User aria-hidden /> Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  autoFocus
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <Mail aria-hidden /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company (optional)"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactNumber">
                  <Phone aria-hidden /> Contact Number
                </label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare aria-hidden /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  defaultValue={topic ? `I'm interested in: ${topic}\n` : ""}
                  placeholder="Please describe your needs or the service you are interested in..."
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn-submit" disabled={sending}>
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send aria-hidden /> Send Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className={`toast${toast.visible ? " show" : ""}${toast.isError ? " toast-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast.text}
      </div>
    </RequestContext.Provider>
  );
}

/** Returns the function that opens the request form. */
export function useRequestAccess() {
  return useContext(RequestContext);
}

type RequestButtonProps = {
  className?: string;
  /** Pre-fills the message box, e.g. a product or service name. */
  topic?: string;
  tabIndex?: number;
  children: ReactNode;
};

export function RequestButton({ className, topic, tabIndex, children }: RequestButtonProps) {
  const openModal = useContext(RequestContext);
  return (
    <button
      type="button"
      className={className}
      tabIndex={tabIndex}
      onClick={() => openModal(topic)}
    >
      {children}
    </button>
  );
}
