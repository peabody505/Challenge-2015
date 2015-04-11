<!doctype html>
<html>

<head>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/mainTabSwitcher.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Challenge 2015</title>
    <script>
        $(document).bind("contextmenu", function (e) {
            e.preventDefault();
        });
        $.ajaxSetup({
            cache: false
        });
    </script>
</head>

<body onload="copperKey();">
    <div class="container" style="margin-top:20px;">
        <div class="page-header">
            <center>
                <h1 class="">The Challenge - 2015 Edition</h1>
            </center>
        </div>
        <ul class="nav nav-tabs">
            <li role="presentation" class="active" id="copperKey">
                <a href="javascript:void(0);" onclick="copperKey();">Copper Key</a>
            </li>
            <li role="presentation" id="copperGate">
                <a href="javascript:void(0);" onclick="copperGate();">Copper Gate</a>
            </li>
            <li role="presentation" id="silverKey">
                <a href="javascript:void(0);" onclick="silverKey();">Silver Key</a>
            </li>
            <li role="presentation" id="silverGate">
                <a href="javascript:void(0);" onclick="silverGate();">Silver Gate</a>
            </li>
            <li role="presentation" id="crystalKey">
                <a href="javascript:void(0);" onclick="crystalKey();">Crystal Gate</a>
            </li>
            <li role="presentation" id="crystalGate">
                <a href="javascript:void(0);" onclick="crystalGate();">Crystal Gate</a>
            </li>
        </ul>

        <div class="panel panel-default" style="margin-top:20px;">
            <div class="panel-body loadable">
                <?php include '4h4t29w8h4t982h34p9t8i.html' ?>
            </div>
        </div>
    </div>
</body>

</html>