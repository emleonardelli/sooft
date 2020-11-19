DROP PROCEDURE IF EXISTS fillProfile;

DELIMITER $$

CREATE PROCEDURE fillProfile ()
BEGIN
	DECLARE finished INTEGER DEFAULT 0;

	DECLARE userid       VARCHAR(100) DEFAULT "";
    DECLARE firstname    VARCHAR(100) DEFAULT "";
    DECLARE lastname     VARCHAR(100) DEFAULT "";
    DECLARE username     VARCHAR(100) DEFAULT "";
    DECLARE email        VARCHAR(100) DEFAULT "";
    DECLARE profile_pic  VARCHAR(100) DEFAULT "";
    DECLARE modo         VARCHAR(100) DEFAULT "";
    DECLARE varGroup     VARCHAR(100) DEFAULT "";
    DECLARE goals        VARCHAR(100) DEFAULT "";

	DEClARE curProfile
		CURSOR FOR 
			SELECT * FROM `user` ORDER BY `user`.`id` ASC;

	DECLARE CONTINUE HANDLER 
        FOR NOT FOUND SET finished = 1;

	OPEN curProfile;

	getRow: LOOP
		FETCH curProfile 
        INTO userid, firstname, lastname, username, email, profile_pic, modo, varGroup, goals;

		IF finished = 1 THEN 
			LEAVE getRow;
		END IF;

        INSERT INTO profile
        VALUES (NULL, userid, firstname, lastname, modo, sex, 0, 0, 0, 0, 0, 0, 0, 0, goals, varGroup, "{}");
	END LOOP getRow;
	CLOSE curProfile;
END$$
DELIMITER ;