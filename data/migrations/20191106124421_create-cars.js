// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.

exports.up = function(knex, Promise) {

    return knex.schema.createTable('cars', tbl => {

        tbl.increments();//id
        

        tbl.decimal('VIN').unique().notNullable();

        tbl.text('Make', 128).notNullable();

        tbl.text('Model', 128).notNullable();

        tbl.decimal('Mileage', 128).notNullable();


        tbl.text('TransmissionType', 128);

        tbl.text('Title', 128);

      });
      
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
