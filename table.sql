
create table users (
    user_id serial primary key,
    username varchar(20) unique not null,
    email varchar(100) unique not null,
    password varchar(255) not null,
    created_at date default current_date
);

create table userProfile (
    user_id int primary key,
    bio varchar(255),
    pfp varchar(255),
    foreign key (user_id) references users(user_id) on delete cascade
);

create table post (
    post_id serial primary key,
    user_id int not null,
    format varchar(50),
    content varchar(255), 
    description varchar(255),
    tags varchar(255),
    created_at date default current_date,
    is_public boolean,
    foreign key (user_id) references users(user_id) on delete cascade
);

create table postReaction (
    post_id int not null,
    user_id int not null,
    reaction varchar(10) not null,
    created_at date default current_date,
    primary key (post_id, user_id),
    foreign key (post_id) references post(post_id) on delete cascade,
    foreign key (user_id) references users(user_id) on delete cascade,
    check (reaction in ('like', 'dislike'))
);

create table comment (
    comment_id serial primary key,
    content varchar(255),
    created_at date default current_date,
    post_id int not null,
    user_id int not null,
    parent_comment_id int, -- Replaces replies_to table
    foreign key (post_id) references post(post_id) on delete cascade,
    foreign key (user_id) references users(user_id) on delete cascade,
    foreign key (parent_comment_id) references comment(comment_id) on delete cascade
);

create table follow (
    follower_id int not null,
    following_id int not null,
    created_at date default current_date,
    primary key (follower_id, following_id),
    foreign key (follower_id) references users(user_id) on delete cascade,
    foreign key (following_id) references users(user_id) on delete cascade
);

