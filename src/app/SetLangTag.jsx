"use client";

import { useEffect } from "react";

export default function SetLangTag() {
  useEffect(() => {
    const userLang = navigator.language || "ja";
    document.documentElement.lang = userLang.startsWith("ja") ? "ja" : "en";
  }, []);

  return null; // DOM要素は出力しない
}
