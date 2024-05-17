"use client"

import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useEffect, useState} from "react";
import { useHotkeys } from '@mantine/hooks';

/**
 * @description Creates a HTML page that displays the Toronto Blue Jays roster, stats,
 * and team scores. It uses React hooks to handle state and provides an interactive
 * layout for the user.
 * 
 * @returns { HTML element, which is a container for various HTML content including
 * images, tables, h1 headings, etc } a React component that displays a baseball
 * scorecard with team and player statistics.
 * 
 * 	1/ `div`: This element is a container for other HTML elements. It has a class of
 * `flex` and flexbox layout is applied to it.
 * 	2/ `w-full`: This class sets the width of the `Table` element to 100%.
 * 	3/ `border-y-2`: This class adds a border of size 2 pixels to the vertical edge
 * of the `TableHeader` element.
 * 	4/ `TableRow`: This element represents a row in the table. It has two classes:
 * `table-head` and `border-y-2`. The `table-head` class adds a horizontal rule to
 * the row, while the `border-y-2` class adds a border of size 2 pixels to the vertical
 * edge of the row.
 * 	5/ `TableHead`: This element represents the header of the table. It has two
 * classes: `text-right` and `border-y-white`. The `text-right` class aligns the text
 * to the right, while the `border-y-white` class adds a border of size 2 pixels to
 * the vertical edge of the header.
 * 	6/ `<img>` elements: These elements represent images displayed in the table. They
 * have the `src` attribute set to the image path and the `alt` attribute set to the
 * team name.
 * 	7/ `<h1>` elements: These elements represent the team names displayed in the
 * table. They have the `text-3xl` class applied to them, which sets the font size
 * to 3 times the default size.
 * 	8/ `<TableCell>` elements: These elements represent cells in the table. They have
 * the `text-7xl` class applied to them, which sets the font size to 7 times the
 * default size.
 * 	9/ `<TableBody>` element: This element represents the body of the table. It
 * contains the data rows displayed in the table.
 * 	10/ `<div>` elements: These elements represent additional HTML content displayed
 * outside the table. They have the `w-1/3` class applied to them, which sets their
 * width to 1/3 of the parent container.
 * 
 * 	In summary, the `Home` function returns an HTML element that contains a table
 * with team names and data, along with additional content outside the table.
 */
/**
 * @description Makes an HTTP GET request to `http://statsapi.mlb.com/api/v1/schedule/games/`
 * with the sport Id 1, and logs the response text to the console.
 */
export default function Home() {





    // async function getStats() {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Basic TkRFeE5qQTFNVFY4TVRjeE16azROelUzTlM0Mk1ESXpOemMwOjVkYTMwZWM3NTU0MjdiZjhmNGM4ZTM2ZTU0NTA2ZTg5Njg5ODhkMmIzYzNhYmVlMTFmZWQ1MDhiOTk2MWFmNWQ=");
    //
    //     const requestOptions = {
    //         method: "GET",
    //         headers: myHeaders,
    //         redirect: "follow"
    //     };
    //
    //     fetch("http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1", requestOptions)
    //         .then((response) => response.text())
    //         .then((result) => console.log(result))
    //         .catch((error) => console.error(error));
    // }


    const [inning1H, setInning1H] = useState(0)
    const [inning2H, setInning2H] = useState(0)
    const [inning3H, setInning3H] = useState(0)
    const [inning4H, setInning4H] = useState(0)
    const [inning5H, setInning5H] = useState(0)
    const [inning6H, setInning6H] = useState(0)
    const [inning7H, setInning7H] = useState(0)
    const [inning8H, setInning8H] = useState(0)
    const [inning9H, setInning9H] = useState(0)

    const [inning1A, setInning1A] = useState(0)
    const [inning2A, setInning2A] = useState(0)
    const [inning3A, setInning3A] = useState(0)
    const [inning4A, setInning4A] = useState(0)
    const [inning5A, setInning5A] = useState(0)
    const [inning6A, setInning6A] = useState(0)
    const [inning7A, setInning7A] = useState(0)
    const [inning8A, setInning8A] = useState(0)
    const [inning9A, setInning9A] = useState(0)

    const [runsH, setRunsH] = useState(0)
    const [hitsH, setHitsH] = useState(0)
    const [errorsH, setErrorsH] = useState(0)

    const [runsA, setRunsA] = useState(0)
    const [hitsA, setHitsA] = useState(0)
    const [errorsA, setErrorsA] = useState(0)


    const [balls, setBalls] = useState(0)
    const [strikes, setStrikes] = useState(0)
    const [outs, setOuts] = useState(0)

    // 0 - Home, 1 - Away
    const [selectedTeam, setSelectedTeam] = useState(0)

    const [selectedHighlight, setSelectedHighlight] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setSelectedHighlight(null)
        }, 1000)

    }, [selectedTeam])

    useHotkeys([

        ['mod+1', () => {
            selectedTeam === 0 ? setInning1H(0 ) : setInning1A(0)
        }],
        ['mod+2', () => {
            selectedTeam === 0 ? setInning2H(0) : setInning2A(0)
        }],
        ['mod+3', () => {
            selectedTeam === 0 ? setInning3H(0) : setInning3A(0)
        }],
        ['mod+4', () => {
            selectedTeam === 0 ? setInning4H(0) : setInning4A(0)
        }],
        ['mod+5', () => {
            selectedTeam === 0 ? setInning5H(0) : setInning5A(0)
        }],
        ['mod+6', () => {
            selectedTeam === 0 ? setInning6H(0) : setInning6A(0)
        }],
        ['mod+7', () => {
            selectedTeam === 0 ? setInning7H(0) : setInning7A(0)
        }],
        ['mod+8', () => {
            selectedTeam === 0 ? setInning8H(0) : setInning8A(0)
        }],
        ['mod+9', () => {
            selectedTeam === 0 ? setInning9H(0) : setInning9A(0)
        }],

        ['mod+r', () => {
            selectedTeam === 0 ? setRunsH(0 ) : setRunsA(0)
        }],
        ['mod+H', () => {
            selectedTeam === 0 ? setHitsH(0 ) : setHitsA(0)
        }],
        ['mod+e', () => {
            selectedTeam === 0 ? setErrorsH(0 ) : setErrorsA(0)
        }],

        ['mod+b', () => {
           setBalls(0)
        }],
        ['mod+s', () => {
            setStrikes(0)
        }],
        ['mod+o', () => {
            setOuts(0)
        }],

        ['1', () => {
            selectedTeam === 0 ? setInning1H(val => val + 1 ) : setInning1A(val => val + 1)
        }],
        ['2', () => {
           selectedTeam === 0 ? setInning2H(val => val + 1) : setInning2A(val => val + 1)
        }],
        ['3', () => {
            selectedTeam === 0 ? setInning3H(val => val + 1) : setInning3A(val => val + 1)
        }],
        ['4', () => {
            selectedTeam === 0 ? setInning4H(val => val + 1) : setInning4A(val => val + 1)
        }],
        ['5', () => {
            selectedTeam === 0 ? setInning5H(val => val + 1) : setInning5A(val => val + 1)
        }],
        ['6', () => {
            selectedTeam === 0 ? setInning6H(val => val + 1) : setInning6A(val => val + 1)
        }],
        ['7', () => {
            selectedTeam === 0 ? setInning7H(val => val + 1) : setInning7A(val => val + 1)
        }],
        ['8', () => {
            selectedTeam === 0 ? setInning8H(val => val + 1) : setInning8A(val => val + 1)
        }],
        ['9', () => {
            selectedTeam === 0 ? setInning9H(val => val + 1) : setInning9A(val => val + 1)
        }],

        ['r', () => {
            selectedTeam === 0 ? setRunsH(val => val + 1 ) : setRunsA(val => val + 1)
        }],
        ['h', () => {
            selectedTeam === 0 ? setHitsH(val => val + 1 ) : setHitsA(val => val + 1)
        }],
        ['e', () => {
            selectedTeam === 0 ? setErrorsH(val => val + 1 ) : setErrorsA(val => val + 1)
        }],


        ['b', () => {
            setBalls(val => val < 5 ? val + 1 : null )
        }],
        ['s', () => {
            setStrikes(val => val < 4 ? val + 1 : null )
        }],
        ['o', () => {
            setOuts(val => val < 4 ? val + 1 : null )
        }],

        ['t', () => {
            selectedTeam === 0 ? setSelectedTeam(1) : setSelectedTeam(0)
            setSelectedHighlight(selectedTeam === 0 ? 1 : 0)
        }],


        //adding shift key to reset values





    ]);



    /**
     * @description Creates a HTML div element with classnames `.flex` and `.justify-between`
     * to align the text horizontally. It also uses the `position` prop to display a title
     * for each player, followed by their name and average score.
     * 
     * @param { object } props - 3 properties (position, name, and avg) that are used to
     * generate the output HTML markup.
     * 
     * @returns { HTML div element } a set of three headings, each containing the relevant
     * information for that heading.
     * 
     * 		- `position`: A string representing the position of the player.
     * 		- `name`: A string representing the name of the player.
     * 		- `avg`: A number representing the average rating of the player.
     */
    const Player = (props) => {
        return (
            <div className={"flex justify-between px-10"}>
                <h1 className={"text-center py-[1.tpx] text-xs"}>{props.position}</h1>
                <h1 className={"text-center py-[1.5px] text-xs"}>{props.name}</h1>
                <h1 className={"text-center py-[1.5px] text-xs"}>{props.avg}</h1>
            </div>
        )
    }


    const stats = [
        {
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Toronto_Blue_Jays_logo.svg/1200px-Toronto_Blue_Jays_logo.svg.png",
            team: "BLUE JAYS",
            i1: inning1A,
            i2: inning2A,
            i3: inning3A,
            i4: inning4A,
            i5: inning5A,
            i6: inning6A,
            i7: inning7A,
            i8: inning8A,
            i9: inning9A,
            runs: runsA,
            hits: hitsA,
            errors: errorsA,

        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/New_York_Yankees_Primary_Logo.svg/1200px-New_York_Yankees_Primary_Logo.svg.png",
            team: "Yankees",
            i1: inning1H,
            i2: inning2H,
            i3: inning3H,
            i4: inning4H,
            i5: inning5H,
            i6: inning6H,
            i7: inning7H,
            i8: inning8H,
            i9: inning9H,
            runs: runsH,
            hits: hitsH,
            errors: errorsH,
        }
    ]




  return (
      //main container for screen
   <div className={"flex flex-col h-screen"}>
     {/* Top Section - Picture and players */}
     <div className={"flex"}>
     {/* Width 3/4 - Player image */}

         <div className={"w-3/4 h-full"}>
              <img src={"https://pbs.twimg.com/media/FUYOL0EWAAEAXGE.jpg:large"} alt={""}/>
         </div>

         {/* Width 1/4 - Roster and stats*/}
         <div className={"w-1/4 flex flex-col"}>
             <div className={"border-2  border-white"}>
                 <h1 className={"text-center py-1"}>TORONTO BLUE JAYS</h1>
             </div>
             <div className={"border-2 border-t-0 border-white"}>
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
             <div className={"border-2 border-y-0 border-white"}>
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
                           <TableHead className={"text-blue-300"}>YANKEE STADIUM</TableHead>
                           <TableHead className={"text-white"}>1</TableHead>
                           <TableHead className={"text-white"}>2</TableHead>
                           <TableHead className={"text-white"}>3</TableHead>
                           <TableHead className={"text-white"}>4</TableHead>
                           <TableHead className={"text-white"}>5</TableHead>
                           <TableHead className={"text-white"}>6</TableHead>
                           <TableHead className={"text-white"}>7</TableHead>
                           <TableHead className={"text-white"}>8</TableHead>
                           <TableHead className={"text-white"}>9</TableHead>
                           <TableHead className={"ml-3 text-blue-300"}>R</TableHead>
                           <TableHead className={"text-blue-300"}>H</TableHead>
                           <TableHead className={"text-blue-300"}>E</TableHead>
                       </TableRow>
                   </TableHeader>
                   {/**
                    * @description Takes an array of stats objects and returns a table with columns for
                    * team name, player statistic names (i1-i9), number of runs, hits, errors, and a
                    * total column for each statistic.
                    */}
                   <TableBody>
                       {stats.map((s, i) => (
                           <TableRow key={s.team}>
                               <TableCell>
                                   <div className={"flex space-x-4 items-center uppercase text-2xl"}>
                                       <img alt={s.team} className={"object-fit"} width={40} height={20} src={s.image} />
                                       <h1 className={
                                             selectedHighlight === i || selectedHighlight === null ? "text-white" : "text-gray-500"
                                       }>{s.team}</h1>
                                   </div>
                               </TableCell>
                               <TableCell className={"text-2xl"}>{s.i1}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i2}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i3}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i4}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i5}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i6}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i7}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i8}</TableCell>
                               <TableCell className={"text-2xl"}>{s.i9}</TableCell>
                               <TableCell className={"text-2xl"}>{s.runs}</TableCell>
                               <TableCell className={"text-2xl"}>{s.hits}</TableCell>
                               <TableCell className={"text-2xl"}>{s.errors}</TableCell>
                           </TableRow>
                       ))}
                   </TableBody>
               </Table>
               <div className={"w-1/3 border-y-white"}>
                   <Table className={"w-full"}>
                       <TableHeader className={"border-y-2"}>
                           <TableRow>
                               <TableHead className={"text-right text-blue-300"}>BALLS</TableHead>
                                 <TableHead className={"text-right text-blue-300"}>STRIKES</TableHead>
                                    <TableHead className={"text-right text-blue-300"}>OUTS</TableHead>

                           </TableRow>
                       </TableHeader>
                       <TableBody>
                               <TableRow>
                                      <TableCell className={"text-7xl text-center pt-4"}><span className={"ml-5"}>{
                                          balls
                                      }</span></TableCell>
                                        <TableCell className={"text-7xl text-center pt-4"}>{
                                            strikes
                                        }</TableCell>
                                        <TableCell className={"text-7xl text-center pt-4"}>{
                                            outs
                                        }</TableCell>

                               </TableRow>
                       </TableBody>
                   </Table>
               </div>
           </div>
       </div>
   </div>
  )
}
