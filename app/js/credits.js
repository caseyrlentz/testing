var creditsApp = new Vue({
    el: '#creditsApp',
    data: {
      creditsTiers: [
        { price: '$20',
          benefit: "No Bonus",
          customerTier: "Individual",
          isSelected: null,
          hasBenefit: false
        },
        { price: '$50',
          benefit: "No Bonus",
          customerTier: "Professional",
          isSelected: null,
          hasBenefit: false
        },
        { price: '$100',
          benefit: "+ $10 Bonus",
          customerTier: "Most Popular",
          isSelected: null,
          hasBenefit: true
        },
        { price: '$200',
          benefit: "+ $22 Bonus",
          customerTier: "Best Value",
          isSelected: null,
          hasBenefit: true
        }

      ],
      methods: {
          clickSelection: function(event) {
            console.log(this.creditsTiers.isSelected)
          }
      }
    }
  })