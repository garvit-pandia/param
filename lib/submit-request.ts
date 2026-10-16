import { contactEmails } from "@/data/site";

// Field names match the columns of the old `service_requests` table.
export type AccessRequest = {
  full_name: string;
  email: string;
  company: string;
  contact_number: string;
  message: string;
};

export type SubmitResult = { ok: true } | { ok: false; message: string };

// The form has no backend yet. Save the request here (database, email, sheet)
// and return { ok: true } once it is stored. Until then the form tells the
// visitor that the request was not sent instead of pretending it worked.
export async function submitRequest(
  request: AccessRequest,
): Promise<SubmitResult> {
  void request;
  return {
    ok: false,
    message: `Requests can't be sent from this form yet. Please email us at ${contactEmails[0]} instead.`,
  };
}
