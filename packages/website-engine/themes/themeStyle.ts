import type React from "react";
import type { ThemeConfig } from "@/packages/website-engine/config/types";

export function createThemeStyle(theme: ThemeConfig) {
  return {
  "--brand-background": theme.colors.background,
  "--brand-surface": theme.colors.surface,
  "--brand-cream": theme.colors.surfaceAlt,
  "--brand-text": theme.colors.text,
  "--brand-muted": theme.colors.muted,
  "--brand-gold": theme.colors.primary,
  "--brand-gold-dark": theme.colors.primaryDark,
  "--brand-bronze": theme.colors.accent,
  "--brand-card-radius": theme.radius.card,
  "--brand-control-radius": theme.radius.control,
  } as React.CSSProperties;
}
