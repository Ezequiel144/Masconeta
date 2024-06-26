import { prisma } from "../lib/prisma";
import { initialData } from "./seed";
import { provinces } from "./seed-provinces";

async function main() {
  try {
    // 1. Borrar registros previos si es necesario
    // 1.A -> Borrar registros previos de las tablas que tienen dependencias
    await prisma.postToHowDelivered.deleteMany();
    await prisma.postToEnumBehavior.deleteMany();
    await prisma.postToDiseases.deleteMany();
    await prisma.post.deleteMany();
    await prisma.species.deleteMany();
    await prisma.diseases.deleteMany();

    // 1.B -> Borrar registros previos de las tablas que no tienen dependencias
    await prisma.user.deleteMany();
    await prisma.province.deleteMany();
    await prisma.howDelivered.deleteMany();
    await prisma.behavior.deleteMany();
    await prisma.species.deleteMany();

    // 2. Crear usuarios
    await prisma.user.createMany({
      data: initialData.users,
    });

    // 3. Crear cómo se entrega
    await prisma.howDelivered.createMany({
      data: initialData.howDelivered,
    });

    // 4. Crear comportamientos
    await prisma.behavior.createMany({
      data: initialData.behavior,
    });

    // 5. Crear provincias
    await prisma.province.createMany({
      data: provinces,
    });

    // 6. Crear especies
    await prisma.species.createMany({
      data: initialData.species,
    });

    // 7. Enfermedades
    await prisma.diseases.createMany({
      data: initialData.diseases,
    });

    console.log("Datos creados correctamente.");
  } catch (error) {
    console.error("Error al crear datos:", error);
  } finally {
    await prisma.$disconnect();
  }
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
