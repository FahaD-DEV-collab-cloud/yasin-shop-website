import site from "@/src/config/site";

const dayMap: Record<string, string> = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

function parseBusinessHours(hoursText: string) {
  const match = hoursText.match(
    /(Mon|Tue|Wed|Thu|Fri|Sat|Sun|\w{3})\s*[-–]?\s*(?:\w{3})?\s*•?\s*(\d{1,2}:\d{2})\s*(AM|PM)\s*[-–]\s*(\d{1,2}:\d{2})\s*(AM|PM)/i
  );

  if (!match) {
    return { opens: "09:00", closes: "21:00" };
  }

  const [, , opensTime, opensMeridiem, closesTime, closesMeridiem] = match;

  const toMinutes = (time: string, meridiem: string) => {
    const [hours, minutes] = time.split(":").map(Number);
    let totalMinutes = hours * 60 + minutes;

    if (meridiem.toUpperCase() === "PM" && hours !== 12) {
      totalMinutes += 12 * 60;
    }

    if (meridiem.toUpperCase() === "AM" && hours === 12) {
      totalMinutes = minutes;
    }

    return totalMinutes;
  };

  const openMinutes = toMinutes(opensTime, opensMeridiem);
  const closeMinutes = toMinutes(closesTime, closesMeridiem);

  const formatTime = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  };

  return {
    opens: formatTime(openMinutes),
    closes: formatTime(closeMinutes),
  };
}

const getOpeningHoursSpecification = () => {
  const fallbackHours = parseBusinessHours(site.hours);

  return (site.openDays.length ? site.openDays : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]).map((day) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: dayMap[day] ?? day,
    opens: fallbackHours.opens,
    closes: fallbackHours.closes,
  }));
};

export default function LocalBusinessSchema() {
  const serviceOffers = (site.services ?? []).map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.name,
      description: service.description ?? "",
      areaServed: site.areaServed ?? ["Lalian"],
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.businessName,
    image: site.image ?? "https://yasin-shop-website.vercel.app/images/shop/storefront.jpg",
    telephone: site.phone,
    url: site.website ?? "https://yasin-shop-website.vercel.app",
    priceRange: site.priceRange ?? "Rs 10 - 500",
    description:
      "M Khan Netcafe offers printing, photocopy, Easypaisa, JazzCash, NADRA assistance, online forms, job application help, and digital services in Lalian, Punjab.",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.split("Near")[0].trim() || site.address,
      addressLocality: "Lalian",
      addressRegion: "Punjab",
      postalCode: "",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo?.lat ?? 31.8211,
      longitude: site.geo?.lng ?? 72.3191,
    },
    areaServed: site.areaServed ?? ["Lalian"],
    openingHoursSpecification: getOpeningHoursSpecification(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.businessName} Services`,
      itemListElement: serviceOffers,
    },
    makesOffer: serviceOffers,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
