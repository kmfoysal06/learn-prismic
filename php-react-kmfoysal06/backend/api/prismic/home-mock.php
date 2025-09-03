<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Mock data that matches the Prismic structure from the Next.js app
$mockHomeData = [
    'id' => 'mock-home-id',
    'uid' => 'home',
    'type' => 'home',
    'data' => [
        'meta_title' => 'kmfoysal06 - Portfolio',
        'meta_description' => 'Portfolio showcasing skills, projects, and experience in web development',
        'meta_image' => [
            'url' => 'https://example.com/meta-image.jpg',
            'alt' => 'Portfolio meta image'
        ],
        'slices' => [
            [
                'slice_type' => 'header',
                'variation' => 'default',
                'primary' => [
                    'logo_text' => 'kmfoysal06',
                    'logo_link' => [
                        'url' => '/',
                        'link_type' => 'Web'
                    ],
                    'header_links' => [
                        [
                            'text' => 'Home',
                            'url' => '#home',
                            'link_type' => 'Web'
                        ],
                        [
                            'text' => 'Skills',
                            'url' => '#skills',
                            'link_type' => 'Web'
                        ],
                        [
                            'text' => 'Projects',
                            'url' => '#projects',
                            'link_type' => 'Web'
                        ],
                        [
                            'text' => 'Contact',
                            'url' => '#contact',
                            'link_type' => 'Web'
                        ]
                    ],
                    'github_link' => [
                        'url' => 'https://github.com/kmfoysal06',
                        'link_type' => 'Web'
                    ]
                ]
            ],
            [
                'slice_type' => 'hero',
                'variation' => 'default',
                'primary' => [
                    'hello_text' => 'Hello, I am',
                    'developer_full_name' => 'K M Foysal',
                    'developer_bio' => 'Learning and building web applications with a focus on user experience and performance.',
                    'developer_image' => [
                        'url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
                        'alt' => 'K M Foysal',
                        'dimensions' => [
                            'width' => 300,
                            'height' => 300
                        ]
                    ],
                    'social_links' => [
                        [
                            'link_name' => 'GitHub',
                            'link' => [
                                'url' => 'https://github.com/kmfoysal06',
                                'link_type' => 'Web'
                            ]
                        ],
                        [
                            'link_name' => 'LinkedIn',
                            'link' => [
                                'url' => 'https://linkedin.com/in/kmfoysal06',
                                'link_type' => 'Web'
                            ]
                        ],
                        [
                            'link_name' => 'Twitter',
                            'link' => [
                                'url' => 'https://twitter.com/kmfoysal06',
                                'link_type' => 'Web'
                            ]
                        ]
                    ]
                ]
            ],
            [
                'slice_type' => 'skills',
                'variation' => 'default',
                'primary' => [
                    'badge' => 'Skills',
                    'section_description' => 'Technologies and tools I work with',
                    'skills' => [
                        [
                            'skill_name' => 'JavaScript',
                            'skill_logo' => [
                                'url' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
                                'alt' => 'JavaScript'
                            ]
                        ],
                        [
                            'skill_name' => 'React',
                            'skill_logo' => [
                                'url' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                                'alt' => 'React'
                            ]
                        ],
                        [
                            'skill_name' => 'Node.js',
                            'skill_logo' => [
                                'url' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                                'alt' => 'Node.js'
                            ]
                        ],
                        [
                            'skill_name' => 'PHP',
                            'skill_logo' => [
                                'url' => 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
                                'alt' => 'PHP'
                            ]
                        ]
                    ]
                ]
            ],
            [
                'slice_type' => 'projects',
                'variation' => 'default',
                'primary' => [
                    'badge' => 'Projects',
                    'section_description' => 'Some of my recent work',
                    'projects' => [
                        [
                            'title' => 'E-commerce Platform',
                            'description' => 'Full-stack e-commerce solution built with React and Node.js',
                            'image' => [
                                'url' => 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
                                'alt' => 'E-commerce Platform'
                            ]
                        ],
                        [
                            'title' => 'Task Management App',
                            'description' => 'Modern task management application with real-time updates',
                            'image' => [
                                'url' => 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
                                'alt' => 'Task Management App'
                            ]
                        ],
                        [
                            'title' => 'Portfolio Website',
                            'description' => 'Responsive portfolio website built with Next.js and Prismic CMS',
                            'image' => [
                                'url' => 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
                                'alt' => 'Portfolio Website'
                            ]
                        ]
                    ]
                ]
            ],
            [
                'slice_type' => 'experiences',
                'variation' => 'default',
                'primary' => [
                    'badge' => 'Experience',
                    'section_description' => 'My professional journey',
                    'experiences' => [
                        [
                            'title' => 'Tech Company',
                            'designation' => 'Frontend Developer',
                            'image' => [
                                'url' => 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
                                'alt' => 'Tech Company'
                            ],
                            'start_time' => '2023-01-01',
                            'end_time' => null,
                            'currently_working' => true
                        ],
                        [
                            'title' => 'Startup Inc',
                            'designation' => 'Junior Developer',
                            'image' => [
                                'url' => 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&h=200&fit=crop',
                                'alt' => 'Startup Inc'
                            ],
                            'start_time' => '2022-06-01',
                            'end_time' => '2022-12-31',
                            'currently_working' => false
                        ]
                    ]
                ]
            ],
            [
                'slice_type' => 'contact',
                'variation' => 'default',
                'primary' => [
                    'badge' => 'Contact',
                    'section_description' => 'Get in touch with me',
                    'name' => 'K M Foysal',
                    'designation' => 'Web Developer',
                    'phone' => '+1 234 567 8900',
                    'email' => 'contact@kmfoysal06.com',
                    'image' => [
                        'url' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
                        'alt' => 'Contact'
                    ]
                ]
            ],
            [
                'slice_type' => 'footer',
                'variation' => 'default',
                'primary' => [
                    'name' => 'K M Foysal',
                    'designation' => 'Web Developer',
                    'location' => 'Bangladesh',
                    'email' => 'contact@kmfoysal06.com',
                    'external_links' => [
                        [
                            'text' => 'Blog',
                            'url' => 'https://blog.kmfoysal06.com',
                            'link_type' => 'Web'
                        ],
                        [
                            'text' => 'Resume',
                            'url' => 'https://resume.kmfoysal06.com',
                            'link_type' => 'Web'
                        ]
                    ],
                    'footer_credit_text' => 'Copyright [current_year] K M Foysal. All rights reserved.'
                ]
            ]
        ]
    ]
];

echo json_encode($mockHomeData, JSON_PRETTY_PRINT);