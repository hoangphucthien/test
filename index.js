 var n = prompt("nhap so n")
 var m = prompt("nhap so m")
for ( i = 1; i <= n; i++ ){ 
    for( j = 1; j <= m; j++){
        if( i==1 || j == 1 || i == n || j == m){
           document.write("*")
        }
        else{
            document.write(" ")
        }
    }
} 
    