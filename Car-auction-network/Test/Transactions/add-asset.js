{
 "$class": "org.hyperledger.composer.system.AddAsset",
 "resources": [
  {
   "$class": "org.acme.vehicle.auction.Vehicle",
   "vin": "1234",
   "owner": "resource:org.acme.vehicle.auction.Member#9314"
  }
 ],
 "targetRegistry": "resource:org.hyperledger.composer.system.AssetRegistry#org.acme.vehicle.auction.Vehicle",
 "transactionId": "0c7a85c2-02b2-499a-be76-a744fd00ef4c",
 "timestamp": "2018-12-19T18:51:52.759Z"
}
{
 "$class": "org.hyperledger.composer.system.AddAsset",
 "resources": [
  {
   "$class": "org.acme.vehicle.auction.VehicleListing",
   "listingId": "listing1",
   "reservePrice": 0,
   "description": "",
   "state": "FOR_SALE",
   "vehicle": "resource:org.acme.vehicle.auction.Vehicle#1234"
  }
 ],
 "targetRegistry": "resource:org.hyperledger.composer.system.AssetRegistry#org.acme.vehicle.auction.VehicleListing",
 "transactionId": "76994e67-41fe-4f7d-b1f1-1269e5e55d77",
 "timestamp": "2018-12-19T18:53:06.147Z"
}
