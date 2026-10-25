"use client";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import { Box, Boxes, TriangleAlert, Wallet } from "lucide-react";
import "@/app/globals.css";

export default function SimpleCard({ item }) {
  const Icons = { Box, Boxes, TriangleAlert, Wallet };
  const Icon = Icons[item.iconName];

  return (
    <Card className="h-44 w-63 bg-card-light dark:bg-card-dark shadow-md border border-border-light dark:border-border-dark transition-colors duration-200">
      <CardBody className="p-4">
        <Icon className="text-text-main-light dark:text-text-main-dark w-5 h-5 mb-3" />
        <Typography
          variant="h5"
          color="blue-gray"
          className="my-4 text-sm font-medium text-text-sub-light dark:text-text-sub-dark"
        >
          {item.title}
        </Typography>
        <Typography className="mt-4 mb-2 text-3xl font-bold text-text-main-light dark:text-text-main-dark">
          {item.value}
        </Typography>
        <Typography className="text-xs font-light text-text-sub-light dark:text-text-sub-dark">
          {item.subtitle}
        </Typography>
      </CardBody>
    </Card>
  );
}
