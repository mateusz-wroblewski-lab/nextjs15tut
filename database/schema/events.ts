import {
  uuid,
  varchar,
  pgTable,
  date,
  timestamp,
  text,
} from "drizzle-orm/pg-core";

export const eventsTable = pgTable("events_table", {
  id: uuid("id").notNull().primaryKey().defaultRandom().unique(),
  date: varchar("year_month_day", { length: 30 }).notNull(),
  location: varchar("location", { length: 50 }).notNull(),
  film: text("film_link"),
  photos: text("photos_link"),
  lastActivityDate: date("last_activity_date").defaultNow(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
