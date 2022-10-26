// import React from 'react';
// import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer";

// const styles = StyleSheet.create({
//     page: {
//         flexDirection: 'column',
//         backgroundColor: '#E4E4E4',
//     },
//     section: {
//         fontSize: 30,
//         textAlign: "center",
//         flexGrow: 1
//     },
//     image: {
//         // marginVertical: 15,
//         // marginHorizontal: 100,
//     }
// });


// const PDF = ({ courseDetail }) => {
//     console.log(courseDetail);
//     return (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                     <Text>{courseDetail.courseTitle}</Text>
//                 </View>
//                 <Image
//                     style={styles.image}
//                     src={courseDetail.courseImage}
//                 />
//                 <Text>
//                     {courseDetail.course_description}
//                 </Text>
//             </Page>
//         </Document>
//     );
// };

// export default PDF;