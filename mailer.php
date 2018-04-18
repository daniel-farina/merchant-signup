<?php
ini_set('display_errors', 1);
$curl = curl_init();
$name = $_POST['sg_signup_first_name']; 
$email = $_POST['sg_email']; 
$company = $_POST['sg_signup_last_name']; 

 echo "<script>console.log( 'Debug Objects: " . $email . "' );</script>";

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.sendgrid.com/v3/mail/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>  "{\"personalizations\":[{\"to\":[{\"email\":\"$email\",\"name\":\"$name\"}],\"subject\":\"$name thank you for signing up BitcoinPrivate payments !\"}],\"from\":{\"email\":\"sdrunga@gmail.com\",\"name\":\"BitcoinPrivate\"},\"reply_to\":{\"email\":\"btcp@btcprivate.org\",\"name\":\"BitcoinPrivate\"},\"subject\":\"BitcoinPrivate - Thanks you for signing up !\",\"template_id\":\"fa02e06b-adee-4b7a-9497-c93a83bdba64\"}",
  //"{\n  \"personalizations\": [\n    {\n      \"to\": [\n        {\n          \"email\": \"$email\"\n        }\n      ],\n      \"subject\": \"BitcoinPrivate - Thanks for signing up !\"\n    }\n  ],\n  \"from\": {\n    \"email\": \"btcp@btcprivate.org\"\n  },\n  \"content\": [\n    {\n      \"type\": \"text/html\",\n      \"value\": \"$name<br>$email<br>$subject<br>$message\"\n    }\n  ],\n  \"content\":\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer [Insert SenGrid API Key Here]",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
//header('Location: ' . $_SERVER['HTTP_REFERER']);
header('Location:  '.  'index.html#thankYou'  );
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}


?>
