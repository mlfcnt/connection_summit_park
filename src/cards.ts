export type Card = {
  id: number;
  groupId: number;
  front: string;
};

export const cards: [
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card,
  Card
] = [
  {
    id: 1,
    groupId: 1,
    front: "front1",
  },
  {
    id: 2,
    groupId: 1,
    front: "front2",
  },
  {
    id: 3,
    groupId: 1,
    front: "front3",
  },
  {
    id: 4,
    groupId: 1,
    front: "front4",
  },
  {
    id: 5,
    groupId: 2,
    front: "front5",
  },
  {
    id: 6,
    groupId: 2,
    front: "front6",
  },
  {
    id: 7,
    groupId: 2,
    front: "front7",
  },
  {
    id: 8,
    groupId: 2,
    front: "front8",
  },
  {
    id: 9,
    groupId: 3,
    front: "front9",
  },
  {
    id: 10,
    groupId: 3,
    front: "front10",
  },
  {
    id: 11,
    groupId: 3,
    front: "front11",
  },
  {
    id: 12,
    groupId: 3,
    front: "front12",
  },
  {
    id: 13,
    groupId: 4,
    front: "front13",
  },
  {
    id: 14,
    groupId: 4,
    front: "front14",
  },
  {
    id: 15,
    groupId: 4,
    front: "front15",
  },
  {
    id: 16,
    groupId: 4,
    front: "front16",
  },
];

export const clues: [string, string, string, string] = [
  "clue1",
  "clue2",
  "clue3",
  "clue4",
];
