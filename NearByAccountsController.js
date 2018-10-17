({
    
    init: function(component, event, helper){
        
        var action = component.get("c.getNearAccounts");
        action.setParams({
            accId: component.get("v.recordId")
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(component.isValid() && state === "SUCCESS"){
                var nearbyAccounts = response.getReturnValue();
                
                console.log("Accounts "+nearbyAccounts);
                
                var newLst = [];
               
                for(var i = 0; i < nearbyAccounts.length; i++ ){
                    console.log(nearbyAccounts[i].Name);
                    newLst.push(
                        {
                            location:{
                                City: nearbyAccounts[i].BillingCity,
                                Country: nearbyAccounts[i].BillingCountry,
                                PostalCode: nearbyAccounts[i].BillingPostalCode,
                                State: nearbyAccounts[i].BillingState,
                                Street: nearbyAccounts[i].BillingStreet
                    		},
                             icon: 'standard:account',
                             title: nearbyAccounts[i].Name
                         }
                    
                    );
                    console.log('newList1 '+JSON.stringify(newLst));
                    
                }
            	
                component.set("v.mapMarkers", newLst);
                component.set("v.markersTitle", 'Nearby Accounts');
            }else{
                console.log("Failed with state :"+state);
				console.log("Component is :"+component);
            }
            
    });
      $A.enqueueAction(action);
       
    }
                           
})
