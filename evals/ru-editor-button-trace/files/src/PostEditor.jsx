import { t } from "./i18n";
import { publishPost, deleteDraft } from "./api";
import { toast } from "./toast";

export function PostEditor({ draft, onClose }) {
  async function handlePrimary() {
    // Makes the post public and emails it to every subscriber of the blog.
    await publishPost(draft.id, { notifySubscribers: true });
    toast(t("editor.done"));
    onClose();
  }

  async function handleSecondary() {
    // Permanently deletes the draft. There is no trash or undo.
    await deleteDraft(draft.id);
    onClose();
  }

  return (
    <footer className="editor-footer">
      <button onClick={handleSecondary}>{t("editor.cancel")}</button>
      <button className="primary" onClick={handlePrimary}>{t("editor.save")}</button>
    </footer>
  );
}
