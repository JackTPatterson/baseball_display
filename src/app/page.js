import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default function Home() {


    async function getStats() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic TkRFeE5qQTFNVFY4TVRjeE16azROelUzTlM0Mk1ESXpOemMwOjVkYTMwZWM3NTU0MjdiZjhmNGM4ZTM2ZTU0NTA2ZTg5Njg5ODhkMmIzYzNhYmVlMTFmZWQ1MDhiOTk2MWFmNWQ=");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));
    }

    const Player = (props) => {
        return (
            <div className={"flex justify-between px-10"}>
                <h1 className={"text-center py-1"}>{props.position}</h1>
                <h1 className={"text-center py-1"}>{props.name}</h1>
                <h1 className={"text-center py-1"}>{props.avg}</h1>
            </div>
        )
    }


    const stats = [
        {
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Toronto_Blue_Jays_logo.svg/1200px-Toronto_Blue_Jays_logo.svg.png",
            team: "BLUE JAYS",
            i1: "0",
            i2: "0",
            i3: "0",
            i4: "0",
            i5: "0",
            i6: "0",
            i7: "0",
            i8: "0",
            i9: "0",
            runs: "0",
            hits: "0",
            errors: "0",
            balls: "0",
            strikes: "0",
            outs: "0"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/1200px-New_York_Yankees_Primary_Logo.svg.png",
            team: "Yankees",
            i1: "0",
            i2: "0",
            i3: "0",
            i4: "0",
            i5: "0",
            i6: "0",
            i7: "0",
            i8: "0",
            i9: "0",
            runs: "0",
            hits: "0",
            errors: "0",
            balls: "0",
            strikes: "0",
            outs: "0"
        }

    ]


  return (
      //main container for screen
   <div className={"flex flex-col h-screen"}>
     {/* Top Section - Picture and players */}
     <div className={"flex"}>
     {/* Width 3/4 - Player image */}

         <div className={"w-3/4"}>
              <img src={"https://pbs.twimg.com/media/FUYOL0EWAAEAXGE.jpg:large"} />
         </div>

         {/* Width 1/4 - Roster and stats*/}
         <div className={"w-1/4 flex flex-col"}>
             <div className={"border-2 border-white"}>
                 <h1 className={"text-center py-1"}>TORONTO BLUE JAYS</h1>
             </div>
             <div className={"border-2 border-t-0 border-white"} style={{
                 // background: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/1200px-New_York_Yankees_Primary_Logo.svg.png')",
                 //    backgroundSize: "cover",
                 //    backgroundPosition: "center",
                 //    backgroundRepeat: "no-repeat",
                 // backgroundColor: "rgba(0,0,0,0.5)",
             }
             }>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
             </div>
             <div className={"border-2 border-t-0 border-white"}>
                 <Player position={"P"} name={"REYES"} avg={".20"}/>
             </div>
             <div className={"border-2 border-white border-t-0"}>
                 <h1 className={"text-center py-1"}>NEW YORK YANKEES</h1>
             </div>
             <div className={"border-2 border-t-0 border-white"}>
                 <Player position={"LF"} name={"GARDNER"} avg={".29"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
                 <Player position={"SS"} name={"REYES"} avg={".20"}/>
             </div>
             <div className={"border-2 border-t-0 border-white"}>
                 <Player position={"P"} name={"REYES"} avg={".20"}/>
             </div>
         </div>
     </div>


       {/* Bottom Section - Team Scores */}
       <div>
           <div className={"flex"}>
               <Table className={" w-full"}>
                   <TableHeader className={"border-y-2"}>
                       <TableRow>
                           <TableHead>YANKEE STADIUM</TableHead>
                           <TableHead>1</TableHead>
                           <TableHead>2</TableHead>
                           <TableHead>3</TableHead>
                           <TableHead>4</TableHead>
                           <TableHead>5</TableHead>
                           <TableHead>6</TableHead>
                           <TableHead>7</TableHead>
                           <TableHead>8</TableHead>
                           <TableHead>9</TableHead>
                           <TableHead>R</TableHead>
                           <TableHead>H</TableHead>
                           <TableHead>E</TableHead>
                       </TableRow>
                   </TableHeader>
                   <TableBody>
                       {stats.map((s) => (
                           <TableRow key={s.team}>
                               <TableCell>
                                   <div className={"flex space-x-4 items-center uppercase text-3xl"}>
                                       <img alt={s.team} className={"object-fit"} width={50} height={20} src={s.image} />
                                       <h1>{s.team}</h1>
                                   </div>
                               </TableCell>
                               <TableCell className={"text-3xl"}>{s.i1}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i2}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i3}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i4}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i5}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i6}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i7}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i8}</TableCell>
                               <TableCell className={"text-3xl"}>{s.i9}</TableCell>
                               <TableCell className={"text-3xl"}>{s.runs}</TableCell>
                               <TableCell className={"text-3xl"}>{s.hits}</TableCell>
                               <TableCell className={"text-3xl"}>{s.errors}</TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
               </Table>
               <div className={"w-1/3 border-y-white"}>
                   <Table className={"w-full"}>
                       <TableHeader className={"border-y-2"}>
                           <TableRow>
                               <TableHead className={"text-right"}>BALLS</TableHead>
                                 <TableHead className={"text-right"}>STRIKES</TableHead>
                                    <TableHead className={"text-right"}>OUTS</TableHead>

                           </TableRow>
                       </TableHeader>
                       <TableBody>
                               <TableRow>
                                      <TableCell className={"text-7xl text-right"}>{0}</TableCell>
                                        <TableCell className={"text-7xl text-right"}>{1}</TableCell>
                                        <TableCell className={"text-7xl text-right"}>{1}</TableCell>

                               </TableRow>
                       </TableBody>
                   </Table>
               </div>
           </div>
       </div>
   </div>
  )
}
