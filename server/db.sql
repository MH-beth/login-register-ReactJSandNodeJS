CREATE TABLE `users`(
    `id` int(11) NOT NULL,
    `username` varchar(52) NOT NULL,
    `password` varchar(52) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `users` 
    ADD PRIMARY KEY(`id`);
ALTER TABLE `Users`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
