<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazing Numbers!</title>
    <style>
        *{
            background-color: black;
            color: white;
        }
        .main{
            color: red;
            font-size: 50px;
            margin: 30px auto;
            width: max-content;
        }
        .skore{
            margin: 100px auto; 
            text-align: center;
            font-size: 28px;

        }
        .btn{
            
            width: 100%;
        }
        .cudl, .info{
            display: block;
            margin: 5px auto;
            width: max-content;
            font-size: 20px;
        }
        .cudl{
            margin: 30px auto;
            font-size: 28px;
            font-weight: 700;
            border-color: yellow;
        }
        .page{
            width: 100%;
            display:block;
        }
    </style>
</head>
<body>
    <div class="page">
    <div class="btn">
        <form action="" method="post">
            <button type="submit" value="" name="cudl" class="cudl">Losuj!</button>
        </form>
    </div>
<?php

    function stranka(){
        $skore = 0;
        
        function rollDice(){
            $genNum = rand(1,50);
            return $genNum;
        }
        $cislo = rollDice();
        echo("<div class='main'>".$cislo."</div>");
        /*Sudy/Lichy?*/
            if($cislo%2==0){
                $skore += 2;
                echo("<div class='info'>SUDE: +2 body</div>");
            } else{
                $skore+=1;
                echo("<div class='info'>LICHE: +1 bod</div>");
            }
            if($cislo %7 ==0){
                $skore+=1;
                echo("<div class='info'>DELITELNE 7: +1 bod</div>");
            }
        /* prime number?*/
        function prvocislo($zadaneCislo, &$skore, &$cislo){
            if($zadaneCislo > 1){
                $kolikratDelitelne = 0;
                for ($i=2; $i <= $zadaneCislo; $i++) { 
                    
                    if($zadaneCislo % $i == 0){
                        $kolikratDelitelne++;
                    }
                    
                }
                if($kolikratDelitelne==1){
                    if($zadaneCislo == $cislo){
                        echo("<div class='info'>PRVOCISLO: +5 bodu</div>");
                        $skore+=5;
                    }else{
                        echo("<div class='info'>SOUCET CIFER JE PRVOCISLO (".$zadaneCislo."): +3 body</div>");
                        $skore+=3;
                    }
                }
            }
        }

        // palindrom?
        function jePalindrom($numerus){
            $numerus = (string)$numerus;
            $reverseCislo = strrev($numerus);
            if($numerus == $reverseCislo){
                return TRUE;
            }
        }


        prvocislo($cislo, $skore, $cislo);
        // soucet cifer -> prime?
        if($cislo>=10){
            $cifernySoucet = 0;
            $slovoCislo = (string)$cislo;
            for ($a=0; $a < strlen($slovoCislo); $a++) { 
                $cifernySoucet += substr($slovoCislo,$a,1);
            }
            prvocislo($cifernySoucet, $skore, $cislo);
            if(jePalindrom(decbin($cifernySoucet))){
                echo("<div class='info'>SOUCET CIFER (" . $cifernySoucet . ") JE BINARNI PALINDROM (" . decbin($cifernySoucet) . "): +10 bodu</div>");
                $skore += 10;
                
            }
        }
        


        // binarni palindrom
        $cisloBin = decbin($cislo);
        if(jePalindrom($cisloBin)){
            echo("<div class='info'>CISLO JE BINARNI PALINDROM (" . $cisloBin . "): +7 bodu</div>");
            $skore+=7;
        }


        //palindrom
        if(jePalindrom($cislo)){
            echo("<div class='info'>CISLO JE PALINDROM: +5 bodu</div>");
            $skore+=5;
        }
        

        // kulturni cisla (pohadkove 2,3,7,13; 451F,), plnoletost 18 a 15 obcanka?, prestupny rok 29
        switch ($cislo){
            // pohadkova cisla
            case 2:
                echo("<div class='info'>POHADKOVE CISLO: +2 body</div>");
                $skore += 2;
                break;
            case 3:
                echo("<div class='info'>POHADKOVE CISLO: +2 body</div>");
                $skore += 2;
                break;
            case 7:
                echo("<div class='info'>POHADKOVE CISLO: +2 body</div>");
                $skore += 2;
                break;
            case 12:
                echo("<div class='info'>POHADKOVE CISLO: +2 body</div>");
                $skore += 2;
                break;
            case 13:
                echo("<div class='info'>POHADKOVE CISLO: +2 body</div>");
                $skore += 2;
                break;
            // kulturni - kniha
            case 451:
                echo("<div class='info'>KULTURNI CISLO - KNIHA (" . $cislo . " F): +3 body</div>");
                $skore += 3;
                break;
            // roky
            case 18:
                echo("<div class='info'>VEK PLNOLETOSTI: +4 body</div>");
                $skore += 4;
            case 29:
                echo("<div class='info'>DEN PRESTUPNEHO ROKU: +4 bodu</div>");
                $skore += 4;
            default:
                break;
        }

        /*
        ciste ciste mocniny -> 2**2 , 3**3 ...
        ciste mocniny -> 2**3 , 3**2, 5**2 ...
        */

        /* vypis skore*/
        echo("<div class='skore'>Celková zajímavost čísla: " . $skore . " bodů</div>");
        
    }



    if(isset($_POST['cudl'])){
            stranka();
    }

    //max bodu 22 pro cislo 21
?>

    </div>
</body>
</html>