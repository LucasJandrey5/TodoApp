import { category } from "../types/category";
import { task } from "../types/task";

export const testTaskCategories: category[] = [
  {
    id: 1,
    title: "Grocery",
    colorHEX: "#CCFF80",
    secondaryColorHEX: "#21A300",
    icon: "grocery_icon",
  },
  {
    id: 2,
    title: "Work",
    colorHEX: "#FF9680",
    secondaryColorHEX: "#A31D00",
    icon: "work_icon",
  },
  {
    id: 3,
    title: "Sport",
    colorHEX: "#80FFFF",
    secondaryColorHEX: "#00A32F",
    icon: "sport_icon",
  },
  {
    id: 4,
    title: "Design",
    colorHEX: "#80FFD9",
    secondaryColorHEX: "#00A372",
    icon: "design_icon",
  },
  {
    id: 5,
    title: "University",
    colorHEX: "#809CFF",
    secondaryColorHEX: "#0055A3",
    icon: "university_icon",
  },
  {
    id: 6,
    title: "Social",
    colorHEX: "#FF80EB",
    secondaryColorHEX: "#A30089",
    icon: "social_icon",
  },
  {
    id: 7,
    title: "Music",
    colorHEX: "#FC80FF",
    secondaryColorHEX: "#A000A3",
    icon: "music_icon",
  },
  {
    id: 8,
    title: "Health",
    colorHEX: "#80FFA3",
    secondaryColorHEX: "#00A3A3",
    icon: "health_icon",
  },
  {
    id: 9,
    title: "Movie",
    colorHEX: "#80D1FF",
    secondaryColorHEX: "#0069A3",
    icon: "movie_icon",
  },
  {
    id: 10,
    title: "Home",
    colorHEX: "#FFCC80",
    secondaryColorHEX: "#A36200",
    icon: "home_icon",
  },
];

export const testTasks: task[] = [
  {
    id: 1,
    title: "Fazer relatório mensal",
    description: "Preparar relatório de desempenho para a reunião mensal.",
    time: "2023-01-15T10:30:00",
    taskCategory: testTaskCategories[0], // Trabalho
    completed: false,
  },
  {
    id: 2,
    title: "Estudar programação",
    description: "Revisar conceitos de TypeScript e React.",
    time: "2023-01-16T14:00:00",
    taskCategory: testTaskCategories[1], // Estudo
    completed: true,
  },
  {
    id: 3,
    title: "Passeio no parque",
    description: "Dar um passeio relaxante no parque da cidade.",
    time: "2023-01-17T16:45:00",
    taskCategory: testTaskCategories[2], // Lazer
    completed: false,
  },
  {
    id: 4,
    title: "Reunião de equipe",
    description:
      "Participar da reunião de equipe para discutir projetos atuais.",
    time: "2023-01-18T09:00:00",
    taskCategory: testTaskCategories[0], // associando a categoria "Trabalho"
    completed: false,
  },
  {
    id: 5,
    title: "Ler livro recomendado",
    description: "Iniciar a leitura do livro recomendado pelo grupo de estudo.",
    time: "2023-01-19T19:30:00",
    taskCategory: testTaskCategories[1], // associando a categoria "Estudo"
    completed: false,
  },
  {
    id: 6,
    title: "Assistir a um filme",
    description: "Assistir ao filme sugerido por um amigo.",
    time: "2023-01-20T20:15:00",
    taskCategory: testTaskCategories[2], // associando a categoria "Lazer"
    completed: true,
  },
  {
    id: 7,
    title: "Atualizar currículo",
    description: "Adicionar novas experiências ao currículo profissional.",
    time: "2023-01-21T12:45:00",
    taskCategory: testTaskCategories[0], // associando a categoria "Trabalho"
    completed: false,
  },
  {
    id: 8,
    title: "Exercícios físicos",
    description: "Realizar uma sessão de exercícios físicos.",
    time: "2023-01-22T17:00:00",
    taskCategory: testTaskCategories[2], // associando a categoria "Lazer"
    completed: true,
  },
  {
    id: 9,
    title: "Configurar ambiente de desenvolvimento",
    description:
      "Configurar o ambiente de desenvolvimento para o novo projeto.",
    time: "2023-01-23T11:30:00",
    taskCategory: testTaskCategories[1], // associando a categoria "Estudo"
    completed: false,
  },
  {
    id: 10,
    title: "Comprar mantimentos",
    description: "Fazer compras para a semana no supermercado.",
    time: "2023-01-24T15:30:00",
    taskCategory: testTaskCategories[2], // associando a categoria "Lazer"
    completed: true,
  },
];
