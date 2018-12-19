{
 "$class": "org.hyperledger.composer.system.StartBusinessNetwork",
 "bootstrapTransactions": [
  {
   "$class": "org.hyperledger.composer.system.AddParticipant",
   "resources": [
    {
     "$class": "org.hyperledger.composer.system.NetworkAdmin",
     "participantId": "admin"
    }
   ],
   "targetRegistry": "resource:org.hyperledger.composer.system.ParticipantRegistry#org.hyperledger.composer.system.NetworkAdmin",
   "transactionId": "5b129d64-1caa-49cf-80a0-d694f70c9134#0",
   "timestamp": "2018-12-19T18:44:22.404Z"
  },
  {
   "$class": "org.hyperledger.composer.system.IssueIdentity",
   "participant": "resource:org.hyperledger.composer.system.NetworkAdmin#admin",
   "identityName": "admin",
   "transactionId": "5b129d64-1caa-49cf-80a0-d694f70c9134#1",
   "timestamp": "2018-12-19T18:44:22.405Z"
  }
 ],
 "transactionId": "5b129d64-1caa-49cf-80a0-d694f70c9134",
 "timestamp": "2018-12-19T18:44:22.406Z"
}
