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
import { Send, X } from "lucide-react";
import { siteName } from "@/data/site";
import { submitRequest } from "@/lib/submit-request";

type Status = { kind: "idle" | "sending" | "success" | "error"; text: string };

const idle: Status = { kind: "idle", text: "" };

// Opens the request form. Pass a topic to pre-fill the message box.
const RequestContext = createContext<(topic?: string) => void>(() => {});

export function RequestProvider({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [topic, setTopic] = useState("");
  // Goes up by one each time the form is opened, which also gives it fresh, empty fields.
  const [opened, setOpened] = useState(0);
  const [status, setStatus] = useState<Status>(idle);

  const open = useCallback((nextTopic?: string) => {
    setTopic(nextTopic ?? "");
    setStatus(idle);
    setOpened((count) => count + 1);
  }, []);

  // showModal() makes the browser trap focus inside the form, dim the page behind
  // it, close it on Escape and hand focus back to the button that opened it.
  useEffect(() => {
    if (opened > 0 && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      // start typing straight away instead of landing on the close button
      dialog.current.querySelector<HTMLInputElement>("#fullName")?.focus();
    }
  }, [opened]);

  const close = () => dialog.current?.close();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);
    const value = (name: string) => String(fields.get(name) ?? "").trim();

    setStatus({ kind: "sending", text: "Sending your request…" });
    const result = await submitRequest({
      full_name: value("fullName"),
      email: value("email"),
      company: value("company"),
      contact_number: value("contactNumber"),
      message: value("message"),
    });

    if (result.ok) {
      form.reset();
      setStatus({ kind: "success", text: "Thank you. Your request has been sent." });
    } else {
      setStatus({ kind: "error", text: result.message });
    }
  }

  return (
    <RequestContext.Provider value={open}>
      {children}

      <dialog
        ref={dialog}
        className="request"
        aria-labelledby="request-title"
        aria-describedby="request-intro"
        onClick={(e) => {
          // a click on the dimmed area outside the form lands on the dialog itself
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="request-body">
          <button type="button" className="icon-btn request-close" onClick={close}>
            <X aria-hidden />
            <span className="sr-only">Close form</span>
          </button>

          <h2 id="request-title">Start a project</h2>
          <p id="request-intro" className="request-intro">
            Tell us what you need from {siteName}. Fields marked with a star are
            required.
          </p>

          <form key={opened} className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="fullName">
                Full name <span aria-hidden>*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                autoComplete="name"
              />
            </div>

            <div className="field">
              <label htmlFor="email">
                Email address <span aria-hidden>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                inputMode="email"
              />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="company">Company or organisation</label>
                <input type="text" id="company" name="company" autoComplete="organization" />
              </div>

              <div className="field">
                <label htmlFor="contactNumber">Contact number</label>
                <input
                  type="tel"
                  id="contactNumber"
                  name="contactNumber"
                  autoComplete="tel"
                  inputMode="tel"
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">What do you need?</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                defaultValue={topic ? `I'm interested in: ${topic}\n` : ""}
              />
            </div>

            {/* read out by screen readers as soon as it changes */}
            <p
              className={`form-status form-status-${status.kind}`}
              role={status.kind === "error" ? "alert" : "status"}
            >
              {status.text}
            </p>

            <div className="form-actions">
              <button type="button" className="btn btn-ghost" onClick={close}>
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.kind === "sending"}
              >
                <Send aria-hidden />
                {status.kind === "sending" ? "Sending…" : "Send request"}
              </button>
            </div>
          </form>
        </div>
      </dialog>
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
  children: ReactNode;
};

export function RequestButton({ className, topic, children }: RequestButtonProps) {
  const open = useContext(RequestContext);
  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={() => open(topic)}
    >
      {children}
    </button>
  );
}
