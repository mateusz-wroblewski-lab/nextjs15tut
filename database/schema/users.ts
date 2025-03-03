import {
  pgTable,
  pgEnum,
  uuid,
  varchar,
  text,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

export const rolesEnum = pgEnum("roles", ["QUEST", "USER", "ADMIN"]);
export const statusEnum = pgEnum("status", ["PENDING", "APPROVED"]);

export const usersTable = pgTable("users_table", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: rolesEnum().default("USER"),
  status: statusEnum().default("PENDING"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
