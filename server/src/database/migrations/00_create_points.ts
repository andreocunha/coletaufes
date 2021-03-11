import Knex from 'knex'

export async function up(knex: Knex) {
    // Criar a tabela
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('location', 1000).notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    })
    
}

export async function down(knex: Knex) {
    // Voltar atras (deletar a tabela criada)
    return knex.schema.dropTable('point');
}