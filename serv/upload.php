<?php
if(isset($_FILES["foto"]["type"]))
{
$validextensions = array("jpeg", "jpg", "png");
$temporary = explode(".", $_FILES["foto"]["name"]);
$file_extension = end($temporary);
if ((($_FILES["foto"]["type"] == "image/png") || ($_FILES["foto"]["type"] == "image/jpg") || ($_FILES["foto"]["type"] == "image/jpeg")
) && ($_FILES["foto"]["size"] < 200000)//Approx. 200kb files can be uploaded.
&& in_array($file_extension, $validextensions)) {
if ($_FILES["foto"]["error"] > 0)
{
echo "Return Code: " . $_FILES["foto"]["error"] . "<br/><br/>";
}
else
{
if (file_exists("../img/" . $_FILES["foto"]["name"])) {
echo $_FILES["foto"]["name"] . " <span id='invalid'><b>already exists.</b></span> ";
}
else
{
echo " transfering \n";
$sourcePath = $_FILES['foto']['tmp_name']; // Storing source path of the file in a variable
$targetPath = "../img/".$_FILES['foto']['name']; // Target path where file is to be stored
move_uploaded_file($sourcePath,$targetPath) ; // Moving Uploaded file
echo "\n source = " . $sourcePath ."  dest = " . $targetPath . "\n" ;
echo "<span id='success'>Image Uploaded Successfully...!!</span><br/>";
echo "<br/><b>File Name:</b> " . $_FILES["foto"]["name"] . "<br>";
echo "<b>Type:</b> " . $_FILES["foto"]["type"] . "<br>";
echo "<b>Size:</b> " . ($_FILES["foto"]["size"] / 1024) . " kB<br>";
echo "<b>Temp file:</b> " . $_FILES["foto"]["tmp_name"] . "<br>";
}
}
}
else
{
echo "<span id='invalid'>***Invalid file Size or Type***<span>";
}
}
?>
