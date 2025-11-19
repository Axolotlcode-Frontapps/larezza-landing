import * as React from "react";
import { Card, CardContent } from "@/ui/shared/card";
import { CardServices } from "@/ui/shared/services-cards/services-cards";

const missionData = [
    {
        id: crypto.randomUUID(),
        title: "Facial Despigmentante", 
        text1: "* Unifica el tono y reduce manchas por sol, acné o envejecimiento.", 
        text2: "* Aporta luminosidad y mejora la textura.", 
        text3: "* Ideal para lograr una piel más clara y uniforme." 
    },
    { 
        id: crypto.randomUUID(),
        title: "Facial con Hidrodermoabrasión", 
        text1: "* Limpieza profunda con succión y sueros hidratantes.", 
        text2: "* Elimina impurezas, puntos negros y células muertas.", 
        text3: "* Deja la piel fresca, luminosa y sin irritación." 
    },  
    { 
        id: crypto.randomUUID(),
        title: "Hollywood Peel (Carbón Activo)", 
        text1: "* Limpia, afina poros y mejora la textura con carbón + láser suave.", 
        text2: "* Reduce grasa, acné y pigmentación irregular.", 
        text3: "* Piel más luminosa y uniforme desde la primera sesión." 
    },
    { 
        id: crypto.randomUUID(),
        title: "Depilación Láser con Diodo", 
        text1: "* Elimina el vello desde la raíz de forma segura y duradera.", 
        text2: "* Reduce grasa, acné y pigmentación irregular.", 
        text3: "* Deja la piel suave, sin irritación y apto para todo tipo de piel.", 
    },
    { 
        id: crypto.randomUUID(),
        title: "Maderoterapia Reductiva", 
        text1: "* Estimula circulación y sistema linfático para moldear la silueta.", 
        text2: "* Reduce medidas, toxinas y mejora la textura de la piel.", 
        text3: "* Relaja profundamente mientras tonifica y reafirma.",
    }, 
    { 
        id: crypto.randomUUID(),
        title: "Cavitación", 
        text1: "* Reduce grasa localizada con ondas ultrasónicas.", 
        text2: "* Favorece la remodelación sin cirugía.", 
        text3: " ", 
    },
    { 
        id: crypto.randomUUID(),
        title: "Radiofrecuencia", 
        text1: "* Estimula colágeno y elastina.", 
        text2: "* Reafirma y mejora la textura del rostro y cuerpo.", 
        text3: " ", 
    },  
    { 
        id: crypto.randomUUID(),
        title: "Vacuum (Vacumterapia)", 
        text1: "* Succión controlada que mejora circulación y drenaje linfático.", 
        text2: "* Reduce celulitis y retención de líquidos.", 
        text3: " ",
    }, 
    { 
        id: crypto.randomUUID(),
        title: "Lipoláser", 
        text1: "* Láser de baja intensidad que libera grasa acumulada.", 
        text2: "* Potencia los resultados reductivos.", 
        text3: " " 
    },
    { 
        id: crypto.randomUUID(),
        title: "Criolipólisis", 
        text1: "* Congela y elimina grasa localizada.", 
        text2: "* Modela la figura de forma progresiva y no invasiva.", 
        text3: " " 
    },
    { 
        id: crypto.randomUUID(),
        title: "EMS (Electroestimulación Muscular)", 
        text1: "* Contracciones profundas que tonifican sin esfuerzo físico.", 
        text2: "* Fortalece y define músculos.", 
        text3: " " 
    },
];

export function ServicesCarrousel() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-ful">
      <div
        ref={containerRef}
        className="flex overflow-x-auto scroll-snap-x snap-mandatory mt-10"
        style={{ scrollBehavior: "smooth" }}
      >
        {missionData.map((service) => (
          <div
            key={service.id}
            className="pl-1 flex-none text-left w-70 md:w-80 lg:w-1/2 xl:w-1/3 scroll-snap-align-start"
          >
            <div className="p-1">
              <Card>
                <CardContent className="p-2 mb-20">
                  <CardServices
                    title={service.title}
                    text1={service.text1}
                    text2={service.text2}
                    text3={service.text3}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
