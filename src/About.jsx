import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './About.css';

const About = () => {
    const [expanded, setExpanded] = useState(false);
    const panelRefs = {
        panel1: useRef(null),
        panel2: useRef(null),
        panel3: useRef(null),
        panel4: useRef(null)
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            setTimeout(() => {
                panelRefs[panel].current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center' // גלול כך שהאלמנט יהיה במרכז המסך
                });
            }, 100); // תזמון זה מאפשר לאנימציית הפתיחה של ה-Accordion להסתיים
        }
    };

    return (
        <section id="about-section" className="scrollable-container">
            <Container className="custom-container" maxWidth="xl">
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Card className="custom-card">
                            <CardContent className="text-right">
                                <Typography variant="h4" className="title">
                                    ככה נותנים היום מתנות                                 </Typography>
                                <Typography variant="body1" className="body-text">
                                    שירות פשוט וקל למתנות באשראי, בעידן שבו כולם מעבירים אשראי עולם החתונות לא נשאר מאחור, לא עוד להסחב עם מתנות להכין צ'ק או מזומן לאירוע.
                                    פשוט ניגשים לעמדת המתנות בכניסה לאולם ונותנים מתנה בקלות באשראי, ניתן להוסיף ברכה אישית לזוג. רוצים לתת מתנה להורי החתן או הכלה ? גם זה אפשרי ישנה אופציה לבחירה למי לתת את המתנה. כמובן שהתשלום מאובטח לפי תקן ssl .  מתנה זה גיפט קל
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card className="custom-card">
                            <CardContent>
                                <Typography variant="h4" className="section-title">
                                    שאלות נפוצות
                                </Typography>
                                {[
                                    {
                                        panel: 'panel1',
                                        question: 'תוך כמה זמן יועבר הכסף לחשבון הבנק?',
                                        answer: '.הכסף יועבר לחשבונכם תוך 5 ימי עסקים'
                                    },
                                    {
                                        panel: 'panel2',
                                        question: '?האם האורחים יכולים להשאיר מתנה בתשלומים',
                                        answer: '.בהחלט, האורחים שלכם יוכלו לבחור להעניק מתנה ולחלק את הסכום עד 3 תשלומים. חשוב לציין, אתם תקבלו את מלוא הסכום בפעימה אחת ולא תדעו האם אורח חילק את סכום המתנה לתשלומים'
                                    },
                                    {
                                        panel: 'panel3',
                                        question: '?איך אדע איזה אורח השאיר לי מתנה',
                                        answer: '.למחרת האירוע תקבלו למייל קובץ מפורט עם כל  המתנות והברכות'
                                    },
                                    {
                                        panel: 'panel4',
                                        question: '?מה המועד האחרון להרשמה לשירות',
                                        answer: '.מכיוון שהשימוש בשירות מותנה באישור מספר מסמכים הנדרשים עבור זיהוי, יש להרשם לשירות עד 7 ימי עסקים לפני מועד האירוע'
                                    }
                                ].map((item) => (
                                    <Accordion
                                        key={item.panel}
                                        expanded={expanded === item.panel}
                                        onChange={handleChange(item.panel)}
                                        className="custom-accordion"
                                        ref={panelRefs[item.panel]}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon style={{ color: 'rgba(26,96,104,255)' }} />}
                                            aria-controls={`${item.panel}a-content`}
                                            id={`${item.panel}a-header`}
                                        >
                                            <Typography>{item.question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {item.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default About;
