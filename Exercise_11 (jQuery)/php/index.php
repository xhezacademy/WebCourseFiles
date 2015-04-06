<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>
  <?php 
    $title = "Send Email with PHP!";

    echo $title;
  ?>
  </title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  
  <div id="wrap">
    <form action="email.php" method="post">
      <fieldset>
        <label for="name">Emri</label>
        <input type="text" name="name" required>

        <label for="email">Email</label>
        <input type="email" name="email">
        
        <label for="website">Website</label>
        <input type="text" name="website">
        
        <label for="message">Message</label>
        <textarea name="message" id="" cols="30" rows="10" required></textarea>
        
        <input type="submit" value="Dergo">
      </fieldset>
    </form>
  </div>

</body>
</html>