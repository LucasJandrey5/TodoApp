import { category } from "../types/category";
import { task } from "../types/task";

export const testTaskCategories: category[] = [
  {
    id: 1,
    title: "Trabalho",
    colorHEX: "#3498db",
    secondaryColorHEX: "#1b76b3",
    icon: "work_icon",
  },
  {
    id: 2,
    title: "Estudo",
    colorHEX: "#2ecc71",
    secondaryColorHEX: "#1aa153",
    icon: "study_icon",
  },
  {
    id: 3,
    title: "Lazer",
    colorHEX: "#e74c3c",
    secondaryColorHEX: "#942013",
    icon: "leisure_icon",
  },
  {
    id: 4,
    title: "Saúde",
    colorHEX: "#27ae60",
    secondaryColorHEX: "#117a36",
    icon: "health_icon",
  },
  {
    id: 5,
    title: "Compras",
    colorHEX: "#f39c12",
    secondaryColorHEX: "#c77f0e",
    icon: "shopping_icon",
  },
  {
    id: 6,
    title: "Social",
    colorHEX: "#e67e22",
    secondaryColorHEX: "#a95416",
    icon: "social_icon",
  },
  {
    id: 7,
    title: "Projetos Pessoais",
    colorHEX: "#9b59b6",
    secondaryColorHEX: "#692a70",
    icon: "personal_projects_icon",
  },
  {
    id: 8,
    title: "Finanças",
    colorHEX: "#34495e",
    secondaryColorHEX: "#1e2a38",
    icon: "finance_icon",
  },
  {
    id: 9,
    title: "Fitness",
    colorHEX: "#c0392b",
    secondaryColorHEX: "#7b1e17",
    icon: "fitness_icon",
  },
  {
    id: 10,
    title: "Viagens",
    colorHEX: "#16a085",
    secondaryColorHEX: "#0e6657",
    icon: "travel_icon",
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
