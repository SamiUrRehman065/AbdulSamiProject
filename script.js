 
 
 function setTheme(themeName) {
  document.documentElement.className = themeName;
  localStorage.setItem('theme', themeName);
}
 
 // Save the user's theme choice in localStorage
 const currentTheme = localStorage.getItem('theme') || 'light-theme';
 setTheme(currentTheme);

 // Mood tracking
 function trackMood(mood) {
     console.log('Mood tracked: ' + mood);
     // You can extend this by adding mood data to the chart
 }

 // Breathing exercise
 function startBreathing() {
     alert('Start breathing deeply... Inhale slowly... Exhale slowly...');
 }

 // Start Meditation
 function startMeditation() {
     alert('Starting meditation...');
 }

 // PMR (Progressive Muscle Relaxation)
 function startPMR() {
     alert('Starting Progressive Muscle Relaxation...');
 }

 // Mindfulness practice
 function startMindfulness() {
     alert('Starting Mindfulness practice...');
 }
 


 function showExercise1(exerciseName) {
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupImage = document.getElementById('popup-image');

// Exercise details
const exercises = {
    
    breathing: {
        title: 'Breathing Exercise',
        description: 'Calm your mind and body with deep, rhythmic breathing. Techniques include: 1. Diaphragmatic breathing: Focus on expanding your abdomen to engage the diaphragm. 2. 4-7-8 breathing: Inhale for 4 counts, hold for 7 counts, exhale for 8 counts. 3. Box breathing: Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds. These techniques reduce the activity of the stress response system (sympathetic nervous system) and enhance the relaxation response (parasympathetic nervous system).'
    },
    meditation: {
        title: 'Meditation',
        description: 'Focus on the present moment to reduce stress and enhance mindfulness. Techniques include: 1. Guided meditation: Listening to an audio guide for relaxation. 2. Loving-kindness meditation: Cultivating positive feelings toward yourself and others. 3. Body scans: Mentally focusing on each part of your body to release tension. Meditation improves emotional regulation and fosters a sense of calm.'
    },
    pmr: {
        title: 'Progressive Muscle Relaxation',
        description: 'Relieve tension by systematically tensing and relaxing each muscle group. Start from your toes and move upward to your head. This technique increases awareness of physical tension and helps you release it effectively, promoting full-body relaxation.'
    },
    visualization: {
        title: 'Visualization',
        description: 'Imagine a peaceful and serene place or a positive scenario to mentally transport yourself away from stress. Visualization can enhance emotional well-being, reduce anxiety, and provide a sense of calm by engaging your imagination.'
    },
    grounding: {
        title: 'Grounding Exercise',
        description: 'Use your senses to anchor yourself in the present moment and reduce feelings of stress or anxiety. Techniques include: The 5-4-3-2-1 method: Identify five things you see, four things you feel, three things you hear, two things you smell, and one thing you taste. This exercise helps you refocus and stay present.'
    },
    boxBreathing: {
        title: 'Box Breathing',
        description: 'Practice structured breathing by inhaling for 4 seconds, holding for 4 seconds, exhaling for 4 seconds, and holding again for 4 seconds. Box breathing helps regulate stress and anxiety by calming the nervous system and promoting a state of relaxation.'
    }
    
     
    
    
};

// Set popup content
const exercise = exercises[exerciseName];
popupTitle.textContent = exercise.title;
popupDescription.textContent = exercise.description;
popupImage.src = exercise.image;

// Show popup
document.getElementById('popup').style.display = 'flex';
}

function hidePopup() {
document.getElementById('popup').style.display = 'none';
}
 function showExercise(exerciseType) {
let title, description;
switch (exerciseType) {
    case 'healthyRoutines': {
        title= "Healthy Routines and Sleep Hygiene",
        description= "Establishing a regular schedule for eating, exercising, and sleeping is essential for maintaining overall well-being. Healthy routines ensure that your body and mind function optimally. Sleep hygiene, in particular, refers to practices that help you achieve restful and uninterrupted sleep, such as maintaining a consistent sleep schedule, avoiding screens before bedtime, and creating a calming environment. Prioritizing these routines improves your ability to manage stress and maintain a balanced life."
        break;
    }
    case 'acceptingControl': {
        title= "Accepting What You Can’t Control",
        description= "Recognizing when certain things are outside of your control and letting go of the need to change them is a vital aspect of managing stress. Accepting what you cannot control frees you from constant worry and anxiety. By focusing on things you can change, like your reactions and attitude, you become more resilient in facing challenges. This mindset shift can significantly reduce emotional strain and promote mental clarity."
        break;
    }
    case 'cbt': {
        title= "Cognitive Behavioral Therapy (CBT)",
        description= "Cognitive Behavioral Therapy (CBT) is a therapeutic approach that helps individuals identify and change negative thought patterns that contribute to stress. CBT focuses on the relationship between thoughts, emotions, and behaviors, teaching people how to challenge irrational or unhelpful thoughts and replace them with more constructive ones. This method is highly effective in treating conditions like anxiety, depression, and stress, helping individuals develop healthier coping strategies and thought processes."
        break;
    }
    case 'timeInNature': {
        title="Time in Nature",
        description= "Spending time outdoors, in a park, forest, or near water, away from the demands of everyday life, has been shown to reduce stress and improve mental well-being. Nature provides a calming effect, allowing individuals to reconnect with their surroundings and clear their minds. Whether it’s a walk through a forest or simply sitting near a body of water, time in nature allows for relaxation and can even boost creativity and problem-solving skills. This simple practice is an excellent way to manage stress and recharge."
        break;
    }
    case 'physicalActivity': {
        title= "Physical Activity",
        description= "Regular exercise is proven to reduce stress hormones and increase endorphins, which are chemicals that promote feelings of happiness and relaxation. Physical activity, whether it’s walking, yoga, running, or strength training, helps alleviate the physical symptoms of stress, such as muscle tension and fatigue. In addition to improving physical health, exercise promotes better sleep, enhances mood, and boosts overall resilience to stress. Incorporating regular physical activity into your daily routine is one of the most effective ways to manage stress."
        break;
    }
    case 'distractionTechniques': {
        title= "Distraction Techniques",
        description= "Engaging in activities like reading, watching a movie, or doing a hobby can help take your mind off stress and provide a mental break. Distraction techniques can be especially useful when you’re feeling overwhelmed, as they offer an opportunity to shift your focus and prevent rumination on stressful thoughts. By temporarily immersing yourself in a pleasurable or calming activity, you allow your mind to rest, which helps reduce the intensity of stress and improves emotional balance."
        break;
    }
    default:
     title = "Unknown Exercise";
     description = "No details available.";
}

// Set popup content
document.getElementById("popup-title").textContent = title;
document.getElementById("popup-description").textContent = description;

// Show the popup
document.getElementById("popup").style.display = "block";
}

function hidePopup() {
document.getElementById("popup").style.display = "none";
}


 // Chart.js
 
        // Wait until the DOM is fully loaded
        document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('moodChart').getContext('2d');

            // Initial data
            const moodLabels = [
                '😐 Mon', '🙂 Tue', '😌 Wed', '😊 Thu', '😁 Fri', '😌 Sat', '😐 Sun'
            ];
            let moodData = [5, 7, 6, 8, 9, 6, 5]; // Default data

            // Initialize the chart
            const moodChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: moodLabels,
                    datasets: [{
                        label: 'Mood Tracking',
                        data: moodData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        tooltip: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    const emojiDescriptions = [
                                        'Neutral Mood',
                                        'Slightly Happy',
                                        'Relaxed Mood',
                                        'Happy Mood',
                                        'Very Happy',
                                        'Relaxed Mood',
                                        'Neutral Mood'
                                    ];
                                    return `Mood: ${emojiDescriptions[tooltipItem.dataIndex]} (${tooltipItem.raw})`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 10,
                            title: {
                                display: true,
                                text: 'Mood Level (1-10)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Days of the Week'
                            }
                        }
                    }
                }
            });

            // Handle form submission
            const moodForm = document.getElementById('moodForm');
            moodForm.addEventListener('submit', (event) => {
                event.preventDefault(); // Prevent page reload

                // Get mood values from the form
                moodData = [
                    parseInt(document.getElementById('moodMon').value),
                    parseInt(document.getElementById('moodTue').value),
                    parseInt(document.getElementById('moodWed').value),
                    parseInt(document.getElementById('moodThu').value),
                    parseInt(document.getElementById('moodFri').value),
                    parseInt(document.getElementById('moodSat').value),
                    parseInt(document.getElementById('moodSun').value),
                ];

                // Update chart data
                moodChart.data.datasets[0].data = moodData;
                moodChart.update(); // Refresh the chart
            });
        });
    