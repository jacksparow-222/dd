import React, { useState } from "react";

export default function InstantDemo() {
  const [lang, setLang] = useState("fr");
  const [name, setName] = useState("");
  const [type, setType] = useState("Restaurant");
  const [color, setColor] = useState("gold");

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <div className="flex gap-2">
          <button
            onClick={() => setLang("fr")}
            className={`px-3 py-1 rounded ${lang === "fr" ? "bg-black text-white" : "border"}`}
          >
            FR
          </button>
          <button
            onClick={() => setLang("ar")}
            className={`px-3 py-1 rounded ${lang === "ar" ? "bg-black text-white" : "border"}`}
          >
            AR
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">
          {lang === "fr" ? "Nom de l'entreprise" : "اسم المشروع"}
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 rounded border"
          placeholder={lang === "fr" ? "ex: Riad des Saveurs" : "مثال: رياض النكهات"}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">{lang === "fr" ? "Type" : "النوع"}</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full px-3 py-2 rounded border"
        >
          <option>Restaurant</option>
          <option>Boutique</option>
          <option>Ecommerce</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-1">{lang === "fr" ? "Couleur" : "اللون"}</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full px-3 py-2 rounded border"
        >
          <option value="gold">Or / Chaud</option>
          <option value="red">Rouge</option>
          <option value="blue">Bleu</option>
        </select>
      </div>
    </div>
  );
}
