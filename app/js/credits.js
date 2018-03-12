var creditsApp = new Vue({
    el: '#creditsApp',
    data: {
      creditsTiers: [
        { price: '20.00',
          benefit: "No Bonus",
          customerTier: "Individual",
          isSelected: null
        },
        { price: '50.00',
          benefit: "No Bonus",
          customerTier: "Professional",
          isSelected: null
        },
        { price: '100.00',
          benefit: "+ $10 Bonus",
          customerTier: "Most Popular",
          isSelected: null
        },
        { price: '200.00',
          benefit: "+ $22 Bonus",
          customerTier: "Best Value",
          isSelected: null
        }

      ],
      methods: {
          clickSelection: function(event) {
            console.log(this.creditsTiers.isSelected)
          }
      }
    }
  })