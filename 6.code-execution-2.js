let a = 5;
{
    let a = 4;
    {
        let a = 3;
        {
            let a = 2;
            {
                let a = 1;
                console.log(a); // 1
            }
            console.log(a); // 2
        }
        console.log(a); // 3
    }
    console.log(a); // 4
}
console.log(a); // 5