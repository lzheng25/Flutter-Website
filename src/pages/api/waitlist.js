// To make sure only valid emails are sent to us, install email validator:
//  $ yarn add email-validator 
//  $ # or
//  $ npm i --save email-validator
import validator from "email-validator";
// import { Pool, Client } from 'pg'

const { IncomingWebhook } = require('@slack/webhook');
// const client = new Client("postgresql://lzheng25:6HFOSboUGL_e1r_LelOa7w@free-tier14.aws-us-east-1.cockroachlabs.cloud:26257/flutterwaitlist?sslmode=verify-full&options=--cluster%3Dflared-monkey-1133");
const webhook = new IncomingWebhook("https://hooks.slack.com/services/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");
const Airtable = require("airtable");
const base = new Airtable({ apiKey: "keyczUJvbt6UCpY5F" }).base("appSn6Bucohn9RkrI");

export default async function handler(req, res) {
    // We only want to handle POST requests, everything else gets a 404
    if (req.method === 'POST') {
        await postHandler(req, res);
    } else {
        // res.status(404).send("");
        console.log("hello");
    }
}

async function postHandler(req, res) {
    const body = JSON.parse(req.body);
    const user = parseAndValidateEmail(body, res);
    await saveUser(user);
    res.status(200).send("")
}

async function saveUser(user) {
    // TODO: what to do here?

//     try {
//       await client.connect();
//       const query = "INSERT INTO waitlist (email) VALUES ($1)";
//       const values = [email]
//       await client.query(query, values)
//       await client.end();
//       await webhook.send({
//         text: email + ' just joined the waitlist!',
//       });
//       console.log("Database got email: " + email);
//   } catch (err) {
//     console.log(`error connecting: ${err}`);
//   }

    console.log(user.first);
    console.log(user.last);
    console.log(user.email);

    try {
        await webhook.send({
            text: user.first + ' ' + user.last + ' just joined the waitlist with ' + user.email + '!',
        });
    } catch (err) {
        console.log(`error connecting: ${err}`);
    }
    
    const rec = {
            "First": `${user.first}`,
            "Email": `${user.email}`,
            "Last": `${user.last}`
    }

    try {
      await updateOrInsert (rec)
      console.log("Finished updating or inserting new record.")
    } catch (err) {
      console.log(`error connecting: ${err}`);
    }
    
    
    // await updateOrInsert (rec)
    // console.log("Finished updating or inserting new record.")
    
}

// const create = async record => {
//     base('Flutter Waitlist').create(record, function(err, record) {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log("Created", record.getId());
//     });
//   };

  const create = async record => {
    const r = await base('Flutter Waitlist').create(record);
    try{
      console.log("Created", r.getId());
    } catch(err){
      console.error(err);
    };
  };
  
  // const replace = async (id, record) => {
  //   base('Flutter Waitlist').replace(id, record, function(err, record) {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     console.log("Replaced", record.get("Email"));
  //   });
  // };

  const replace = async (id, record) => {
    const r = await base('Flutter Waitlist').replace(id, record);
    try{
      console.log("Replaced", r.get("Email"));
    } catch(err){
      console.error(err);
    };
  };
  
  // const updateOrInsert = async record => {
  //   const primaryField = record.Email;
  
  //   base('Flutter Waitlist')
  //     .select({
  //       maxRecords: 1,
  //       view: "Grid view",
  //       filterByFormula: `{Email} = "${primaryField}"`,
  //     })
  //     .eachPage(function page(records, fetchNextPage) {

  //       records.forEach(function(r) {
  //         console.log("Retrieved", r.get("Email"));
  //         replace(r.id, record);
  //       });
  
  //       if (!records.length) {
  //         console.log("Empty");
  //         create(record);
  //       }
        
  //       fetchNextPage();

  //     }, function done(err) {
  //       if (err) { console.error(err); return; }
  //     });
  // };

  const updateOrInsert = async record => {
    const primaryField = record.Email;
  
    await base('Flutter Waitlist')
      .select({
        maxRecords: 1,
        view: "Grid view",
        filterByFormula: `{Email} = "${primaryField}"`,
      })
      .eachPage(async function page(records, fetchNextPage) {
        records.forEach(async function (r) {
          //console.log("Retrieved", r.get("Email"));
          await replace(r.id, record);
        });
  
        if (!records.length) {r
          console.log("Empty");
          await create(record);
        }
        
        fetchNextPage();
        
      });
  };

// Make sure we receive a valid email
function parseAndValidateEmail(body, res) {
    if (!body) {
        res.status(400).send("Malformed request");
    }

    const email = body["email"]
    if (!email) {
        res.status(400).send("Missing email");
    } else if (email.length > 300) {
        res.status(400).send("Email is too long");
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid email");
    }
    const first = body["first"]
    if (!email) {
        res.status(400).send("Missing first name");
    } else if (email.length > 300) {
        res.status(400).send("First name is too long");
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid first name");
    }
    const last = body["last"]
    if (!email) {
        res.status(400).send("Missing last name");
    } else if (email.length > 300) {
        res.status(400).send("Last name is too long");
    } else if (!validator.validate(email)) {
        res.status(400).send("Invalid last name");
    }

    return body;
}