import React from "react";

// component
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4 lg:mt-16 ">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className="lg:w-3/4 ml-10">
                        <h2 className="text-2xl font-bold mb-4">Plays in Dharamshala</h2>
                        <p  className="text-sm py-1 lg:w-16 pl-2 text-red-500 border-2 border-gray-300 rounded-full py-1 px-17 bg-gray-50 ">Theatre</p>
                        <div className="flex flex-wrap ">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ekwuvquphc-portrait.jpg"
                                    title="Admission -"
                                    subtitle="English -> ₹200"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top/et00311932-mbtdecaqfz-portrait.jpg"
                                    title="Thathuppillai"
                                    subtitle="Tamil -> ₹150"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹400"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312831-ekwuvquphc-portrait.jpg"
                                    title="Admission -"
                                    subtitle="English -> ₹200"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311042-wmtzbczsdj-portrait.jpg"
                                    title="Ellamae Thamash Than"
                                    subtitle="Tamil -> ₹150"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/12 ">
                        <h2 className="text-2xl font-bold mb-4">Filters</h2>
                        <div>
                            <PlaysFilter
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                            <PlaysFilter
                                title="Language"
                                tags={["Tamil", "Telegu", "English","Hindi"]}
                            />
                            <PlaysFilter
                                title="More Filters"
                                tags={["Online Streaming", "Kids Allowed"]}
                            />
                            <PlaysFilter
                                title="Price"
                                tags={["Free", "0-501", "501-2000","Above 2000"]}
                            />
                        </div>
                        <p  className="text-sm mt-4 lg:w-full p-2 text-red-500 border-2 border-red-300 rounded-md  text-sm text-center bg-gray-50">Browse by Venuse</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Plays;