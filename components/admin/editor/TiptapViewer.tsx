"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";

interface TiptapViewerProps {
  readonly content: string;
}

export default function TiptapViewer({ content }: TiptapViewerProps) {
  const editor = useEditor({
    immediatelyRender: false,
    editable: false,
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class:
            "text-primary underline hover:text-secondary transition-colors",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class:
            "max-w-full max-h-[500px] h-auto w-auto rounded-lg shadow-md mx-auto my-6 object-contain",
        },
      }),
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
  });

  if (!editor) return null;

  return (
    <div className="prose prose-lg max-w-none prose-headings:text-secondary prose-p:text-text prose-strong:text-secondary">
      <EditorContent editor={editor} />
    </div>
  );
}