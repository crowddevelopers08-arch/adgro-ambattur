/**
 * Scrolls to the enquiry form that is actually on screen.
 *
 * The lead form is rendered once per breakpoint (mobile / tablet / desktop
 * banner), so a plain `getElementById("form")` would often land on a copy that
 * is hidden at the current viewport width. This picks the rendered one.
 */
export function scrollToLeadForm() {
  if (typeof document === "undefined") return;

  const forms = Array.from(
    document.querySelectorAll<HTMLElement>("[data-lead-form]")
  );

  const visible = forms.find((el) => el.getClientRects().length > 0);

  (visible ?? forms[0])?.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
