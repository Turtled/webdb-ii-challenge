exports.seed = function(knex, Promise) {

  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: 8708347208347, Make: "Toyota", Model: "4Runner", Mileage: 158095, TransmissionType: "Manual", Title: "Clean" },
        { VIN: 1473598475126, Make: "Subaru", Model: "Outback", Mileage: 58095, TransmissionType: "Automatic" },
        { VIN: 4856729865627, Make: "Chevrolet", Model: "Suburban", Mileage: 300120, TransmissionType: "Automatic" }
      ]);
    });
};