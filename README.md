<h1>Post Form</h1>
<b>repo:</b> react-post-form

<hr>

Oggi creeremo il nostro primo form multifield per inviare dati in POST ad un’API.<br>
Dovremo creare una nuova app React che contenga un form per creare un nuovo post all’interno di un blog. <br>
I dati che il form dovrà inviare sono i seguenti:<br>

- author (string) - L’autore del post,
- title (string) - Il titolo del post,
- body (string) - Il testo del post,
- public (boolean) - Se il post deve essere pubblico (true) o una bozza (false),<br><br>

L’endpoint a cui effettuare la chiamata POST è il seguente: https://**67c5b4f3351c081993fb1ab6**.mockapi.io**/api**/posts <br>
Questo endpoint, in caso di successo, vi restituisce i dati inviati. Stampateli in console per verificare di essere riusciti ad inviare correttamente tutto!<br>

<b>Bonus</b>
aggiungere e gestire un alert per dare agli utenti un feedback sull’invio del form.