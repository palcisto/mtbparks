(function() {
  'use strict';
  
  angular.module('mtbparks.services', []);

  function perksService() {

    var perksService = {};

    perksService.getParks = function() {
      return [
        {
          "id": 1,
          "name": "Mountain Creek Bike Park",
          "type": "park",
          "country" :"United States",
          "state": "New Jersey",
          "logo": "http://mtbparks.com/components/com_mtree/img/listings/s/114.jpg",
          "url": "http://mtbparks.com/New-Jersey/243-Mountain-Creek-Bike-Park/View-details.html",
          "marketing-message": "Mountain Creek Bike Park is a two-time Best Bike Park winner in the MTBparks.com Riders' Choice Best Bike Parks Awards for the Mid Atlantic/Southeast Region.",
          "description": "Located just over an hour from the bustling metropolis of Manhattan, Mountain Creek is a well-built resort on which the valuable—and often limited—real estate of Northeastern elevation is used to its full potential. With 40 miles of trail etched into just over 1,000 feet of vert, this Beast of the East offers a progressive riding experience with something for everyone, but is classically known as big bike territory.",
          "perks": [
            "One FREE lift ticket valid one time during the 2015 season. Savings: $43",
            "50% OFF regularly priced lift tickets for each additional visit.",
            "20% OFF bike rentals (weekdays, not including holidays).",
            "10% OFF private lessons any time."
          ]
        },
        {
          "id": 2,
          "name": "Highland Mountain Bike Park",
          "type": "park",
          "country" :"United States",
          "state": "New Hampshire",
          "logo": "http://mtbparks.com/images/2015-Highland/highland-mountain-logo-mtb.jpg",
          "url": "http://mtbparks.com/New-Hampshire/239-Highland-Mountain-Bike-Park/View-details.html",
          "marketing-message": "BRING A FRIEND, GROW THE SPORT, RIDE FOR FREE!",
          "description": "This is a special exclusive AND recurring offer for MTBparks Pass members.<br>*Tickets are non-transferable and must be used during the 2015 season<br>Want to get more friends excited about downhill mountain biking so you can ride more? Highland's Find Your Ride package is designed to introduce new riders and first timers to downhill mountain biking. The program is limited to one use per participant each season, and includes an all day lift pass, one Park Ready rental bike, safety equipment and a one-hour Park Ready lesson. This is a great program for friends and family members interested in checking out lift-accessed mountain biking. One day Find Your Ride package: $99, 3-pack Find Your Ride package: $267.",
          "perks": [
            "One FREE lift ticket.* Savings: $42",
            "Three FREE lift tickets. ** Savings: $126",
            "*When you sign up a friend or family member for a \"Find Your Ride\" full day package.",
            "**When you sign up a friend or family member for a \"Find Your Ride\" 3-pack package."
          ]
        }
      ];
    }

    return perksService;
  }

  angular
    .module('mtbparks.services')
    .factory('perksService', perksService);
})();
