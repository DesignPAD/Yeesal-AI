"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Field, TextArea, Select } from "@/components/forms/field";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

// No backend yet: the form opens WhatsApp with a pre-filled message.
// Swap handleSubmit for an API call when a backend exists.
export function DiagnosticForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Bonjour YEESAL AI 👋 Je souhaite demander un Diagnostic IA.",
      "",
      `Nom : ${data.get("name")}`,
      `Fonction : ${data.get("role") || "—"}`,
      `Email : ${data.get("email")}`,
      `Téléphone / WhatsApp : ${data.get("phone") || "—"}`,
      `Organisation : ${data.get("organization")}`,
      `Secteur : ${data.get("sector")}`,
      `Taille : ${data.get("size")}`,
      "",
      "Enjeux prioritaires :",
      `${data.get("goals")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-mint-500/30 bg-mint-400/5 px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-mint-600" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-950">
          Votre demande est prête à partir
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-900/65">
          WhatsApp s&apos;est ouvert avec votre demande pré-remplie.
          Envoyez-la, et nous revenons vers vous sous 24h ouvrées pour planifier
          un premier échange.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 font-ui text-sm font-semibold text-electric-600 hover:text-electric-700"
        >
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Nom complet"
          name="name"
          required
          placeholder="Awa Ndiaye"
          autoComplete="name"
        />
        <Field
          label="Fonction"
          name="role"
          placeholder="Directrice des opérations"
          autoComplete="organization-title"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Email professionnel"
          name="email"
          type="email"
          required
          placeholder="awa@entreprise.sn"
          autoComplete="email"
        />
        <Field
          label="Téléphone / WhatsApp"
          name="phone"
          type="tel"
          placeholder="+221 77 000 00 00"
          autoComplete="tel"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Organisation"
          name="organization"
          required
          placeholder="Nom de votre structure"
          autoComplete="organization"
        />
        <Select
          label="Secteur d'activité"
          name="sector"
          required
          options={[
            "Banque & Finance",
            "Commerce & Distribution",
            "Éducation",
            "Santé",
            "ONG & Institutions",
            "Logistique & Transport",
            "Agriculture",
            "Télécoms & Tech",
            "Autre",
          ]}
        />
      </div>
      <Select
        label="Taille de l'organisation"
        name="size"
        required
        options={[
          "1 à 10 personnes",
          "11 à 50 personnes",
          "51 à 200 personnes",
          "Plus de 200 personnes",
        ]}
      />
      <TextArea
        label="Vos enjeux prioritaires"
        name="goals"
        required
        placeholder="Quels processus vous prennent le plus de temps ? Où perdez-vous de l'information ? Quelles décisions manquent de données ?"
      />
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Envoyer via WhatsApp
        <Send className="h-4 w-4" aria-hidden />
      </Button>
    </form>
  );
}
