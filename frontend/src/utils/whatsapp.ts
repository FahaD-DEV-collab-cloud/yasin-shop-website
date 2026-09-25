import { site } from "@/src/config/site";

export const getGenericWhatsAppMessage = () =>
  "Assalam-o-Alaikum, mujhe M KHAN NETCAFE se service ke bary mein information chahiye. Please rate aur availability bata dain.";

export const getServiceWhatsAppMessage = (serviceName: string) =>
  `Assalam-o-Alaikum, mujhe ${serviceName} ka rate aur details chahiye. Please requirements aur availability ke bary mein guide karain.`;

export const getServiceRequestMessage = (serviceName: string) =>
  `Assalam-o-Alaikum, mujhe ${serviceName} ka service chahiye. Please rate aur process ke bary mein batain.`;

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
