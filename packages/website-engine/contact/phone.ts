export function toE164(phone: string, defaultCountryCode = "1") {
  const cleaned = phone.replace(/[^\d+]/g, "");
  if (!cleaned) return "";
  if (cleaned.startsWith("+")) return cleaned;
  return `+${defaultCountryCode}${cleaned.replace(/\D/g, "")}`;
}

