import { uuid, varchar, pgTable, date, timestamp } from "drizzle-orm/pg-core";

export const eventsTable = pgTable("events_table", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  date: varchar("year_month_day", { length: 30 }).notNull(),
  location: varchar("location", { length: 50 }).notNull(),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
