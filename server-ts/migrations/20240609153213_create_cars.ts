import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("cars", (table: Knex.TableBuilder) => {
    table.bigIncrements("id").primary();
    table.string("car_name", 30).notNullable();
    table.integer("car_rentPerDay", 30).notNullable();
    table.string("car_size", 30).notNullable();
    table.text("car_img");
    table.timestamp("createAt").defaultTo(knex.fn.now());
    table.timestamp("updateAt").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("cars");
}