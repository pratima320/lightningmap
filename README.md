# lightningmap
This uses the new lightning map component to display all the near by accounts to the currently viewed account.

Refer this documentation: https://developer.salesforce.com/docs/component-library/bundle/lightning:map/documentation

Pre-requisites: 
Version 44
To calculate distances, I am using standard BillingLatitude and BillingLongitude. In order to have values in these fields, you will need to Enable Geocodes for Accounts Billing and Shpipping address or any address fields that are supported. 
To do this, Go to setUp > Data Integration Rules > Find the address that you want to enable > Activate.
Give it some time and it should populate all your existing account addresses with Latitude and Longitude.
