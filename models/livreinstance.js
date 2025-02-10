const { DateTime } = require('luxon')

BookInstanceSchema.virtual('due_back_formatted').get(function() {
    return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED)
})