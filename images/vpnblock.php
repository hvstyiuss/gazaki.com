<?php
// Replace with your IPHub API key
$apiKey = 'MjgxMDk6RllpdGl0elUyWlhDN0JSZjJBR2Y5WEprTHZYMkVwbko=';

// Get visitor IP
$ip = $_SERVER['REMOTE_ADDR'];

// Call IPHub API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://v2.api.iphub.info/ip/{$ip}");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "X-Key: {$apiKey}"
]);
$response = curl_exec($ch);
curl_close($ch);

// Parse response
$data = json_decode($response, true);

// Block if proxy/VPN detected (block == 1 or 2)
if (isset($data['block']) && $data['block'] > 0) {
    // Log or redirect
    header("HTTP/1.1 403 Forbidden");
    echo "Access Denied: VPN/Proxy detected.";
    exit;
}

?>
